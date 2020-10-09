import { getInitialState } from './initial-state';
import { ActionType } from './action-type';

export const reducer = (state = getInitialState(), action) => {
    const { type: actionType, payload, key = 'id', fieldName } = action;
    const _payload = Array.isArray(payload)
        ? [...payload]
        : {
              ...payload,
          };

    switch (actionType) {
        case ActionType.INIT:
            return {
                ...state,
                ...payload,
            };
        case ActionType.SET_OBJECT:
            if (Array.isArray(fieldName)) {
                return fieldName.reduce(
                    (state, _fieldName) => ({
                        ...state,
                        [_fieldName]: _payload,
                    }),
                    state,
                );
            }
            return {
                ...state,
                [fieldName]: _payload,
            };
        case ActionType.ADD_OBJECT:
            return {
                ...state,
                [fieldName]: Array.isArray(sate[fieldName])
                    ? [
                          ...state[fieldName].filter(
                              element => element[key] !== _payload[key],
                          ),
                          _payload,
                      ]
                    : {
                          ...state[fieldName],
                          [key]: _payload,
                      },
            };
        case ActionType.UPDATE_OBJECT:
            return {
                ...state,
                [fieldName]: Array.isArray(state[fieldName])
                    ? [
                          ...state[fieldName].map(element =>
                              element[key] === _payload[key]
                                  ? _payload
                                  : element,
                          ),
                      ]
                    : {
                          ...state[fieldName],
                          [key]: _payload,
                      },
            };
        case ActionType.DELETE_OBJECT:
            return;

        case ActionType.SET_MODAL:
            return {
                ...state,
                modals: {
                    ...state.modals,
                    [payload.uuid]: {
                        ...state.modals[payload.uuid],
                        ...payload,
                    },
                },
            };
        case ActionType.ADD_ERROR_LISTENER:
            return {
                ...state,
                errorListeners: {
                    ...state.errorListeners,
                    [payload.errorCode]: [
                        ...state.errorListeners[payload.errorCode],
                        payload.uuid,
                    ],
                },
            };
        case ActionType.REMOVE_ERROR_LISTENER:
            return {
                ...state,
                errorListeners: {
                    ...state.errorListeners,
                    [payload.errorCode]: state.errorListeners[
                        payload.errorCode
                    ].filter(listener => listener.uuid !== payload.uuid),
                },
            };
        case ActionType.ADD_ERROR:
            return {
                ...state,
                errors: [...state.errors, { ...payload }],
            };
        case ActionType.REMOVE_ERROR:
            return {
                ...state,
                errors: state.errors.filter(error => error.uuid !== payload),
            };
        default:
            return state;
    }
};
