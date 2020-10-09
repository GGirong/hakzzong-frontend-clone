import { apiClient } from 'Client';

import { getDispatchers } from './dispatchers';

export const getApiCallers = ({ state, dispatch }) => {
    const dispatchers = getDispatchers({ state, dispatch });

    return {
        login: async data => {
            const user = await apiClient.post('auth/login/', data);

            if (user) {
                dispatchers.initUser(user);
            }

            dispatchers.initUser({
                username: 'test',
            });
        },
        logout: async () => {
            await apiClient.get('auth/logout/');
            dispatchers.initUser({});
        },
        register: async data => {
            return await apiClient.post(
                'research-assistant/research-assistant-profiles/',
                data,
            );
        },
        validateUsername: async params => {
            return await apiClient.get('auth/validate-username/', { params });
        },
        getRFPMissions: async params => {
            dispatchers.setMissions(
                (await apiClient.get('rfp-missions/', {
                    params,
                })) || [],
            );
        },
        getMissions: async params => {
            const data = await apiClient.get('research-assistant/missions/', {
                params,
            });
            dispatchers.setMissions(data.results);
        },
        getMissionReports: async params => {
            dispatchers.setMissionReports(
                (await apiClient.get('research-assistant/mission-reports/', {
                    params,
                })) || [],
            );
        },
        createPointsWithdrawal: async data => {
            const pointsWithdrawal = await apiClient.post(
                'research-assistant/points-withdrawal',
                data,
            );
        },
    };
};
