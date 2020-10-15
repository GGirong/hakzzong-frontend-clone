export const slices = {
    user: {
        initialState: {
            id: null,
            username: '',
            name: '',
            isActive: false,
        },
        actions: ['SET'],
        reducer: (state, action) => {
            switch (action.type) {
                case 'SET':
                    return { ...action.payload };
            }
        },
    },
    researchAssistant: {
        initialState: {
            profile: {
                id: null,
                bank: '',
                bankHolder: '',
                bankAccountNumber: '',
                university: '',
                major: '',
                points: 0,
            },
            schoolSubjects: {},
            schoolSubjectUnits: [],
            achievementStandards: [],
            majorCategories: {},
            rewards: [],
            currentMissionId: null,
            missionReports: [],
        },
        actions: [
            'SET',
            'SET_PROFILE',
            'SET_SCHOOL_SUBJECTS',
            'SET_SCHOOL_SUBJECT_UNITS',
            'SET_CURRENT_MISSION_ID',
            'SET_REWARDS',
            'SET_MISSION_REPORTS',
            'SET_ACHIEVEMENT_STANDARDS',
            'SET_MAJOR_CATEGORIES',
        ],
        reducer: (state, action) => {
            switch (action.type) {
                case 'SET':
                    return {
                        ...action.payload,
                    };
                case 'SET_PROFILE':
                    return {
                        ...state,
                        profile: { ...action.payload },
                    };
                case 'SET_CURRENT_MISSION_ID':
                    return {
                        ...state,
                        currentMissionId: action.payload,
                    };
                case 'SET_SCHOOL_SUBJECTS':
                    return {
                        ...state,
                        schoolSubjects: { ...action.payload },
                    };
                case 'SET_SCHOOL_SUBJECT_UNITS':
                    return {
                        ...state,
                        schoolSubjectUnits: [...action.payload],
                    };
                case 'SET_ACHIEVEMENT_STANDARDS':
                    return {
                        ...state,
                        achievementStandards: [...action.payload],
                    };
                case 'SET_MAJOR_CATEGORIES':
                    return {
                        ...state,
                        majorCategories: { ...action.payload },
                    };
                case 'SET_REWARDS':
                    return {
                        ...state,
                        rewards: [...action.payload],
                    };
                case 'SET_MISSION_REPORTS':
                    return {
                        ...state,
                        missionReports: { ...action.payload },
                    };
            }
        },
    },
};
