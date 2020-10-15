import React, { createContext, useEffect, useReducer } from 'react';

import { useAPI, APIRoute } from 'Client';

import { slices } from './AppContext.slices';
import {
    getActionEnum,
    getInitialState,
    getReducer,
    getStateFromLocalStorage,
    flushStateToLocalStorage,
} from './utils';

const CONTEXT_NAME = 'AppContext';

const Action = getActionEnum(slices);

const getDefaultState = () =>
    getStateFromLocalStorage(CONTEXT_NAME) || getInitialState(slices);

const reducer = getReducer(slices, getDefaultState());

const getDispatchers = (state, dispatch) => ({
    clear: () => {
        const initialState = getInitialState(slices);
        dispatch({ type: Action.User.SET, payload: initialState.user });
        dispatch({
            type: Action.ResearchAssistant.SET,
            payload: initialState.researchAssistant,
        });
    },

    user: {
        set: user => dispatch({ type: Action.User.SET, payload: user }),
    },

    researchAssistant: {
        setProfile: profile =>
            dispatch({
                type: Action.ResearchAssistant.SET_PROFILE,
                payload: profile,
            }),
        setCurrentMissionId: missionId =>
            dispatch({
                type: Action.ResearchAssistant.SET_CURRENT_MISSION_ID,
                payload: missionId,
            }),
        setSchoolSubjects: schoolSubjects =>
            dispatch({
                type: Action.ResearchAssistant.SET_SCHOOL_SUBJECTS,
                payload: schoolSubjects,
            }),
        setSchoolSubjectUnits: schoolSubjectUnits =>
            dispatch({
                type: Action.ResearchAssistant.SET_SCHOOL_SUBJECT_UNITS,
                payload: schoolSubjectUnits,
            }),
        setAchievementStandards: achievementStandards =>
            dispatch({
                type: Action.ResearchAssistant.SET_ACHIEVEMENT_STANDARDS,
                payload: achievementStandards,
            }),
        setMajorCategories: majorCategories =>
            dispatch({
                type: Action.ResearchAssistant.SET_MAJOR_CATEGORIES,
                payload: majorCategories,
            }),
        setRewards: rewards =>
            dispatch({
                type: Action.ResearchAssistant.SET_REWARDS,
                payload: rewards,
            }),
    },
});

const getGetters = (state, dispatchers) => ({
    getMajorCategory: (value, key = 'id') =>
        Object.values(state.researchAssistant.majorCategories)
            .reduce((accumulated, current) => accumulated.concat(current), [])
            .find(_ => _[key] === value),
    getSchoolSubject: (value, key = 'id') =>
        Object.values(state.researchAssistant.schoolSubjects)
            .reduce((accumulated, current) => accumulated.concat(current), [])
            .find(_ => _[key] === value),
    getSchoolSubjectUnit: (value, key = 'id') =>
        state.researchAssistant.schoolSubjectUnits.find(_ => _[key] === value),
    getAchievementStandard: (value, key = 'code') =>
        state.researchAssistant.achievementStandards.find(
            _ => _[key] === value,
        ),
});

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, getDefaultState());
    const dispatchers = getDispatchers(state, dispatch);
    const getters = getGetters(state, dispatchers);

    const researchAssistantInitialContextRetreiveAPI = useAPI(
        APIRoute.ResearchAssistant.InitialContext.Retrieve,
        {
            callbacks: {
                // set initial context on success
                onSuccess: result => {
                    dispatchers.researchAssistant.setAchievementStandards(
                        result.achievementStandards,
                    );
                    dispatchers.researchAssistant.setSchoolSubjectUnits(
                        result.schoolSubjectUnits,
                    );
                    dispatchers.researchAssistant.setMajorCategories(
                        result.majorCategories,
                    );
                    dispatchers.researchAssistant.setSchoolSubjects(
                        result.schoolSubjects,
                    );
                    dispatchers.researchAssistant.setRewards;
                },
            },
        },
    );
    const authValidateAPI = useAPI(APIRoute.Common.Auth.Validate, {
        callbacks: {
            onError: dispatchers.clear,
        },
    });

    // flush state to local storage everytime dispatch occurs
    useEffect(() => {
        flushStateToLocalStorage(CONTEXT_NAME, state);
    }, [state]);

    // fetch & set initial context when user logs in
    useEffect(() => {
        if (!state.researchAssistant.profile.id) {
            return;
        }
        researchAssistantInitialContextRetreiveAPI.send();
    }, [state.researchAssistant.profile]);

    // validate auth every 30 seconds
    useEffect(() => {
        const loop = () => {
            authValidateAPI.send();
            const timeout = setTimeout(loop, 30 * 1000);
            return () => clearTimeout(timeout);
        };
        return loop();
    }, []);

    return (
        <AppContext.Provider value={{ ...state, dispatchers, getters }}>
            {children}
        </AppContext.Provider>
    );
};
