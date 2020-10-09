import { useState, useEffect, useContext } from 'react';

import { getStorage, setStorage, generateUuid } from 'Utils';
import { apiClient } from 'Client';
import { LOCAL_STORAGE_KEY } from 'Constants/config';

import { AppContext } from './AppContext';

export const useHooks = ({ state, dispatchers }) => {
    const [rehydrated, setRehydrated] = useState(false);

    const rehydrate = () => {
        if (rehydrated) {
            return;
        }

        console.log('rehydrating context state from localStorage ...');
        setRehydrated(true);
        const data = getStorage(LOCAL_STORAGE_KEY);
        if (!data) {
            return;
        }
        dispatchers.initAppContext(JSON.parse(data));
    };
    useEffect(rehydrate, []);

    const flushToLocalStorage = () => {
        if (!rehydrated) {
            return;
        }
        console.log('flushing context state to localStorage ...');

        const stateToFlush = {
            user: state.user,
        };
        setStorage(LOCAL_STORAGE_KEY, JSON.stringify(stateToFlush));
    };
    useEffect(flushToLocalStorage, [rehydrated, state]);

    const registerErrorInterceptor = () => {
        const errorInterceptor = apiClient.interceptors.response.use(
            response => response,
            error => {
                console.error(error);
                const {
                    response: { data },
                } = error;

                dispatchers.distributeError(data);
            },
        );
        return () => apiClient.interceptors.response.eject(errorInterceptor);
    };
    useEffect(registerErrorInterceptor, [dispatchers]);
};

export const useErrorListener = (...errorCodes) => {
    const { state, getters, dispatchers } = useContext(AppContext);

    const [listenerHandle] = useState(generateUuid());
    const [isRegistered, setIsRegistered] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (!isRegistered) {
            errorCodes.forEach(errorCode =>
                dispatchers.registerErrorListener({
                    errorCode,
                    handle: listenerHandle,
                }),
            );
            setIsRegistered(true);
        }

        if (isRegistered) {
            return () =>
                errorCodes.forEach(errorCode =>
                    dispatchers.removeErrorListener({
                        errorCode,
                        handle: listenerHandle,
                    }),
                );
        }
    }, [isRegistered]);

    useEffect(() => {
        const errors = dispatchers.consumeErrors(listenerHandle);
        if (errors.length > 0) {
            setErrors(errors);
        }
    }, [getters, dispatchers, state.errors]);

    return errors;
};
