import request from '../utils/request';

export default {
    login: (code) => request.save(`login`,code)
};


