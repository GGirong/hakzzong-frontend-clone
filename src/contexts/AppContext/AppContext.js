import React, { createContext, useReducer } from 'react';

import { getInitialState } from './initial-state';
import { reducer } from './reducer';
import { getGetters } from './getters';
import { getDispatchers } from './dispatchers';
import { getApiCallers } from './api-callers';
import { useHooks } from './hooks';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, getInitialState());

    const getters = getGetters(state);
    const dispatchers = getDispatchers({ state, dispatch });
    const apiCallers = getApiCallers({ state, dispatch });

    const context = {
        state,
        getters,
        dispatchers,
        apiCallers,
    };

    useHooks(context);

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};
