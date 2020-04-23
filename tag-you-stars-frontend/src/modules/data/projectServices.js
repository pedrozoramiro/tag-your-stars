import request from '../../utils/request';

export default {
    projects: () => request.get(`projects`)
};


