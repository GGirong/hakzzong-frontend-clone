import React, {
    createContext,
    useReducer,
    useCallback,
    useEffect,
    useState,
} from 'react';

import { LOCAL_STORAGE_KEY } from 'Constants/config';
import { getStorage, setStorage } from 'Utils';

const ActionType = {
    INIT: 'INIT',
};

const  getInitialState = () => {
    return {
        user: {
            username: '',
        },
        researchAssitantProfile: {
            points: 0,
            permissions: [],
        },
        rewards: [],

        missions: [],
        missionReports: [],

        concepts: [],
        studySubjects: [],

        subjects: [],
        subjectUnits: [],
        subjectUnitElements: [],
    };
}

const reducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case ActionType.INIT:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [rehydrated, setRehydrated] = useState(false);
    const [state, dispatch] = useReducer(reducer, getInitialState());

    const dispatchers = {
        initAppContext: useCallback(data =>
            dispatch({ type: ActionType.INIT, payload: data }),
        ),
    };

    useEffect(() => {
        if (rehydrated) {
            return;
        }

        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!data) {
            return;
        }

        dispatchers.initAppContext(JSON.parse(data));
        setRehydrated(true);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    const context = {
        ...state,
        ...dispatchers,
    };

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};
