import request from '../../utils/request';

export default {
    user: () => request.get(`user`)
};


