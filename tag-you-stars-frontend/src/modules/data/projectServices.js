import request from '../../utils/request';


function query(filter){
    if(filter){
        return `?filter=${filter}`;
    }
    return "";
}

export default {
    projects: (filter) => request.get(`projects`+query(filter)),
    addTag: ({projectId,tag}) => request.save(`projects/${projectId}/tag/${tag}`),
    deleteTag: ({projectId,tag}) => request.remove(`projects/${projectId}/tag/${tag}`)
};


