import _ from 'lodash';

export function formatMoney(v) {
    v = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'WON',
    }).format(v);
    return v.replace(/WON\s/, '').replace(/\..*/, '');
}

export function stripMoney(v) {
    v = parseInt(v.split(',').join(''));
    return isNaN(v) ? 0 : v;
}

const convertKeys = (fn, o) => {
    if (_.isArray(o)) {
        return o.map(e => convertKeys(fn, e));
    } else if (_.isObject(o)) {
        const n = {};
        Object.keys(o).forEach(k => (n[fn(k)] = convertKeys(fn, o[k])));
        return n;
    }
    return o;
};

export const keysToCamel = o => convertKeys(_.camelCase);

export const keysToSnake = o => convertKeys(_.snakeCase);

export const removeStorage = key => {
    try {
        localStorage.setItem(key, '');
        localStorage.setItem(key + '_expiresIn', '');
    } catch (e) {
        console.log(
            'removeStorage: Error removing key [' +
                key +
                '] from localStorage: ' +
                JSON.stringify(e),
        );
        return false;
    }
    return true;
};

export const getStorage = key => {
    const now = Date.now();
    let expiresIn = localStorage.getItem(key + '_expiresIn');
    if (expiresIn === undefined || expiresIn === null) {
        expiresIn = 0;
    }

    expiresIn = Math.abs(expiresIn);
    if (expiresIn < now) {
        removeStorage(key);
        return null;
    } else {
        try {
            const value = localStorage.getItem(key);
            return value;
        } catch (e) {
            console.log(
                'getStorage: Error reading key [' +
                    key +
                    '] from localStorage: ' +
                    JSON.stringify(e),
            );
            return null;
        }
    }
};

export const setStorage = (key, value, expires = 24 * 60 * 60) => {
    const now = Date.now();
    const schedule = now + expires * 1000;
    try {
        localStorage.setItem(key, value);
        localStorage.setItem(key + '_expiresIn', schedule);
    } catch (e) {
        console.log(
            'setStorage: Error setting key [' +
                key +
                '] in localStorage: ' +
                JSON.stringify(e),
        );
        return false;
    }
    return true;
};
