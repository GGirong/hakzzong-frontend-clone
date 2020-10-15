import lodash from 'lodash';

import { getStorage, setStorage } from 'Utils';
import { LOCAL_STORAGE_KEY } from 'Constants/config';

const toPascalCase = s =>
    lodash.startCase(lodash.camelCase(s)).replace(/ /g, '');

export const getActionEnum = slices => {
    const Action = {};

    Object.entries(slices).forEach(([name, { actions }]) => {
        Action[toPascalCase(name)] = {};
        actions.forEach(
            action =>
                (Action[toPascalCase(name)][action] = `${name}__${action}`),
        );
    });
    return Action;
};

export const getInitialState = slices => {
    const state = {};
    Object.entries(slices).forEach(
        ([key, { initialState }]) =>
            (state[key] = lodash.cloneDeep(initialState)),
    );
    return state;
};

export const getReducer = (slices, defaultState) => (
    state = defaultState,
    action,
) => {
    const [sliceName, actualActionType] = action.type.split('__');
    return {
        ...state,
        [sliceName]: slices[sliceName].reducer(state[sliceName], {
            ...action,
            type: actualActionType,
        }),
    };
};

export const getStateFromLocalStorage = contextName => {
    try {
        return JSON.parse(getStorage(`${LOCAL_STORAGE_KEY}_${contextName}`));
    } catch {
        return null;
    }
};

export const flushStateToLocalStorage = (contextName, state) => {
    setStorage(`${LOCAL_STORAGE_KEY}_${contextName}`, JSON.stringify(state));
};
