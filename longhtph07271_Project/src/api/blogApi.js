import http from "./axiosHttp";

const getAll = () => {
    return http.get("/blog");
};

const get = id => {
    return http.get(`/blog/${id}`);
};

const create = data => {
    return http.post("/blog", data);
};

const update = (id, data) => {
    return http.put(`/blog/${id}`, data);
};

const remove = id => {
    return http.delete(`/blog/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};