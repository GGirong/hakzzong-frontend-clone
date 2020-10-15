export const APIRoute = {
    Common: {
        Auth: {
            Validate: {
                url: 'auth/validate-auth/',
                method: 'get',
            },
            Login: {
                url: 'auth/login/',
                method: 'post',
            },
            Logout: {
                url: 'auth/logout/',
                method: 'get',
            },
            ValidateUsername: {
                url: 'auth/validate-username/',
                method: 'get',
            },
            FindPassword: {
                url: 'auth/find-password/',
                method: 'post',
            },
        },
        Concept: {
            List: {
                url: 'concepts/',
                method: 'get',
            },
        },
    },
    ResearchAssistant: {
        Auth: {
            Register: {
                url: 'research-assistant/profiles/',
                method: 'post',
            },
        },
        Profile: {
            Patch: {
                url: 'research-assistant/profiles/',
                method: 'patch',
            },
        },
        PointsWithdrawal: {
            Create: {
                url: 'research-assistant/points-withdrawals/',
                method: 'post',
            },
        },
        InitialContext: {
            Retrieve: {
                url: 'research-assistant/initial-context/',
                method: 'get',
            },
        },
        Reward: {
            List: {
                url: 'research-assistant/rewards/',
                method: 'get',
            },
        },
        Mission: {
            List: {
                url: 'research-assistant/missions/',
                method: 'get',
            },
        },
        MissionReport: {
            List: {
                url: 'research-assistant/mission-reports/',
                method: 'get',
            },
            Retrieve: {
                url: 'research-assistant/mission-reports/',
                method: 'get',
            },
            Create: {
                url: 'research-assistant/mission-reports/',
                method: 'post',
            },
            Patch: {
                url: 'research-assistant/mission-reports/',
                method: 'patch',
            },
        },
        StudySubject: {
            List: {},
        },
    },
    Admin: {
        Mission: {
            List: {
                url: 'admin/missions/',
                method: 'get',
            },
        },
        StudySubject: {
            List: {
                url: 'admin/study-subjects/',
                method: 'get',
            },
        },
        Concept: {
            List: {
                url: 'admin/concepts/',
                method: 'get',
            },
        },
        MissionReport: {
            List: {
                url: 'admin/reports/',
                method: 'get',
            },
        },
        ResearchAssistant: {
            List: {
                url: 'admin/research-assistants/',
                method: 'get',
            },
        },
        Student: {
            List: {
                url: 'admin/students/',
                method: 'get',
            },
        },
        PointsWithdrawal: {
            List: {
                url: 'admin/points-withdrawals/',
                method: 'get',
            },
        },
    },
};
