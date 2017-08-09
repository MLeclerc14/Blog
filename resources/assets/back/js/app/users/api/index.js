const baseurl = '/api/user/';

export default {
    all (cb) {
        return axios.get(baseurl)
            .then(response => cb(response.data.data))
            .catch(error => cb(response.data.error));
    },
    store (data, cb) {
         return axios.post(baseurl, data)
             .then(response => cb(response.data.data))
             .catch(response => cb(response.data.error));
    },
    edit (id, cb) {
        return axios.get(baseurl + `${id}/edit`)
         .then(response => cb(response.data.data))
         .catch(response => cb(response.data.error))
    },
    update (data, id, cb) {
         return axios.patch(baseurl + `${id}`, data)
             .then(response => cb(response.data.data))
             .catch(response => cb(response.data.error));
    },
    remove (id, user, cb) {
         return axios.delete(baseurl + `${id}`)
             .then(response => cb(response.data.data))
             .catch(response => cb(response.data.error));
    }
}
