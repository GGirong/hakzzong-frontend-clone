import qs from 'qs';
import axios from 'axios';

import { SERVER_URL } from 'Constants/config';
import { keysToCamel, keysToSnake } from 'Utils';

export const apiClient = axios.create({
    baseURL: SERVER_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    transformRequest: [
        (data, headers) => {
            if (headers['Content-Type'] === 'applicatsion/json') {
                data = keysToSnake(data);
            }
            return JSON.stringify(data);
        },
    ],
    transformResponse: [
        data => {
            try {
                data = keysToCamel(JSON.parse(data));
            } catch (e) {}
            return data;
        },
    ],
    paramsSerializer: params => {
        return qs.stringify(keysToSnake(params), { arrayFormat: 'brackets' });
    },
});
