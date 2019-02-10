import axiosInstance from './axios-base'

export const getTodos = () => {
    return axiosInstance.get(`/todos`);
}

export const deleteTodo = (id) => {
    return axiosInstance.delete(`/todos/${id}`)
}