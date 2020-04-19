import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8080/api/v1/';

const executeRequest = (method, url,config) => (axios[method](`${BASE_URL}${url}`, config));

export default {
    get: url => executeRequest('get', url),
    query: url => executeRequest('get', url),
    save: (url, data) => executeRequest('post', url, data),
    update: (url, data) => executeRequest('put', url, data),
    remove: url => executeRequest('delete', url)
};