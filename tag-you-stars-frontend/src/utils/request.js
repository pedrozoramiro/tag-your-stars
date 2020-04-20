import axios from 'axios';

const BASE_URL = 'http://localhost/api/v1/';

var config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'Access-Control-*',
        'Access-Control-Allow-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        'Allow':  'GET, POST, PUT, DELETE, OPTIONS, HEAD'
    }
};

const executeRequest = (method, url, data) => (axios[method](`${BASE_URL}${url}`,data, config));

export default {
    get: url => executeRequest('get', url),
    query: url => executeRequest('get', url),
    save: (url, data) => executeRequest('post', url, data),
    update: (url, data) => executeRequest('put', url, data),
    remove: url => executeRequest('delete', url)
};