import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/users';



export const listUsers = () => axios.get(API_BASE_URL);

export const createUser = (user) => axios.post(API_BASE_URL, user);

export const getUser = (userId) => axios.get(API_BASE_URL + '/' + userId);

export const updateUser = (userId, user) => axios.put(API_BASE_URL + '/' + userId, user);

export const deleteUser = (userId) => axios.delete(API_BASE_URL + '/' + userId);

