import { generateUuid } from 'Utils';

import { ActionType } from './action-type';
import { getGetters } from './getters';

export const getDispatchers = ({ state, dispatch }) => {
    const getters = getGetters(state);

    return {
        initAppContext: data =>
            dispatch({ type: ActionType.INIT, payload: data }),
        initUser: user => {
            dispatch({
                type: ActionType.SET_OBJECT,
                fieldName: 'user',
                payload: user,
            });

            const fieldName = user.studentProfile
                ? 'studentProfile'
                : user.researchAssistantProfile
                ? 'researchAssistantProfile'
                : user.adminProfile
                ? 'adminProfile'
                : [
                      'studentProfile',
                      'researchAssistantProfile',
                      'adminProfile',
                  ];

            dispatch({
                type: ActionType.SET_OBJECT,
                payload: user[fieldName],
                fieldName,
            });
        },
        setMissions: missions =>
            dispatch({
                type: ActionType.SET_OBJECT,
                fieldName: 'missions',
                payload: missions,
            }),
        setMissionReports: missionReports =>
            dispatch({
                type: ActionType.SET_OBJECT,
                fieldName: 'missionReports',
                payload: missionReports,
            }),
        openModal: uuid =>
            dispatch({
                type: ActionType.SET_MODAL,
                payload: { uuid, isOpen: true },
            }),
        closeModal: uuid =>
            dispatch({
                type: ActionType.SET_MODAL,
                payload: { uuid, isOpen: false },
            }),
        registerErrorListener: ({ handle, errorCode }) =>
            dispatch({
                type: ActionType.ADD_ERROR_LISTENER,
                payload: { handle, errorCode },
            }),
        removeErrorListener: ({ handle, errorCode }) =>
            dispatch({
                type: ActionType.REMOVE_ERROR_LISTENER,
                payload: { handle, errorCode },
            }),
        distributeError: errorResponseData => {
            const { code: errorCode } = errorResponseData;
            if (errorCode && state.errorListeners[errorCode]) {
                state.errorListeners[errorCode].forEach(listener =>
                    dispatch({
                        type: ActionType.ADD_ERROR,
                        payload: {
                            ...errorResponseData,
                            uuid: generateUuid(),
                            targetListener: listener,
                        },
                    }),
                );
            }
        },
        consumeErrors: listenerUuid => {
            const errors = getters.getErrors(listenerUuid);
            errors.forEach(error =>
                dispatch({
                    type: ActionType.REMOVE_ERROR,
                    payload: error.uuid,
                }),
            );
            return errors;
        },
    };
};
