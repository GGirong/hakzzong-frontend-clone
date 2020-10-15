import { useState, useEffect } from 'react';

import qs from 'qs';
import axios from 'axios';

import { SERVER_URL } from 'Constants/config';
import { keysToCamel, keysToSnake } from 'Utils';

export const apiClient = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    transformRequest: [
        (data, headers) => {
            if (headers['Content-Type'] === 'application/json') {
                data = keysToSnake(data);
            }
            return JSON.stringify(data);
        },
    ],
    transformResponse: [
        data => {
            try {
                return keysToCamel(JSON.parse(data));
            } catch {
                return data;
            }
        },
    ],
    paramsSerializer: params =>
        qs.stringify(keysToSnake(params), { arrayFormat: 'brackets' }),
});

const _callAPI = async ({ url, method = 'get' }, dataOrParams, options) => {
    const { additionalPath = '', ...config } = options;
    if (additionalPath) {
        url = `${url}${additionalPath}/`;
    }

    if (['get', 'options', 'head', 'delete'].includes(method)) {
        return await apiClient[method](url, {
            ...config,
            params: dataOrParams,
        });
    } else {
        return await apiClient[method](url, dataOrParams, config);
    }
};

export const useAPI = (
    apiRoute,
    options = {
        callbacks: {},
        validators: {},
    },
) => {
    const { callbacks = {}, validators = {} } = options;
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const send = async (dataOrParams = {}, requestConfig = {}) => {
        setResult(null);
        setError(null);
        setResponse(null);

        let isValid = true;
        if (dataOrParams) {
            Object.entries(dataOrParams).forEach(([key, value]) => {
                if (!isValid) {
                    return;
                }

                if (Array.isArray(validators[key])) {
                    validators[key].forEach(validator => {
                        if (!isValid) {
                            return;
                        }

                        try {
                            validator(value);
                        } catch (e) {
                            isValid = false;
                            setError(e);
                        }
                    });
                }
            });
        }

        if (!isValid) {
            return;
        }

        try {
            const api = await _callAPI(apiRoute, dataOrParams, requestConfig);
            setResponse(api);
            setResult(api.data || true);
        } catch (error) {
            if (!error.response) {
                throw error;
            }

            console.error(error);
            setResponse(error.response);
            setError(error.response.data);
        }
    };

    useEffect(() => {
        if (!result && !error) {
            return;
        }

        if (result && callbacks.onSuccess) {
            callbacks.onSuccess(result, response);
        } else if (error && callbacks.onError) {
            callbacks.onError(error, response);
        }

        if (callbacks.finally) {
            callbacks.finally(response);
        }
    }, [result, error]);

    return {
        response,
        result,
        error,
        send,
    };
};
