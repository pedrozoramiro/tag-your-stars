import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

function config(){
    var token = localStorage.getItem("ACCESS_TOKEN");
    console.log(token);
    return {
        headers :  {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': 'Access-Control-*',
            'Access-Control-Allow-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
            'Allow':  'GET, POST, PUT, DELETE, OPTIONS, HEAD',
            'Authorization':  `Bearer ${token}`
        }
    };
}

export default {
    get: url => axios.get(`${BASE_URL}${url}`, config()),
    save: (url, data) => axios.post(`${BASE_URL}${url}`,data,config()),
    update: (url, data) => axios.put(`${BASE_URL}${url}`,data,config()),
    remove: url => axios.delete(`${BASE_URL}${url}`,config())
};