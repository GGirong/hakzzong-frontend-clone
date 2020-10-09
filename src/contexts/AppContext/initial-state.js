import { ApiErrorCode } from './api-error-code';

export const getInitialState = () => {
    const initialState = {
        user: {
            username: '',
        },

        studentProfile: {},
        researchAssistantProfile: {
            // points: 0,
            // permissions: [],
        },
        adminProfile: {},

        rewards: [],

        missions: [],
        missionReports: [],

        concepts: [],
        studySubjects: [],

        subjects: [],
        subjectUnits: [],
        subjectUnitElements: [],

        errors: [],
        errorListeners: {},
    };

    Object.values(ApiErrorCode).forEach(
        errorCode => (initialState.errorListeners[errorCode] = []),
    );

    return initialState;
};
