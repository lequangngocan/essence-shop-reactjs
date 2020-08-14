import http from './axiosHttp';

const getAll = () => {
    return http.get("/category");
}
const show = (id) => {
    return http.get(`/category/${id}`);
}
const create = (data) => {
    return http.post("/category", data);
}
const update = (id, data) => {
    return http.put(`/category/${id}`, data);
}
const remove = (id) => {
    return http.delete(`/category/${id}`);
}
export default {
    getAll,
    show,
    create,
    update,
    remove
}

