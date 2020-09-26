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
            if (headers['Content-Type'] === 'application/json') {
                return keysToSnake(data);
            }
            return data;
        },
    ],
    transformResponse: [
        data => {
            return keysToCamel(data);
        },
    ],
    paramsSerializer: params => {
        return qs.stringify(keysToSnake(params), { arrayFormat: 'brackets ' });
    },
});

export default client;
