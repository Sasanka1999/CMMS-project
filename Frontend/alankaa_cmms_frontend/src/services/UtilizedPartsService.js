import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/utilized-parts';

export const listUtilizedParts = () => axios.get(API_BASE_URL);

export const createUtilizedPart = (utilizedPart) => axios.post(API_BASE_URL, utilizedPart);

export const getUtilizedPartById = (orderId, itemId) => axios.get(`${API_BASE_URL}/${orderId}/${itemId}`);

export const getAllUtilizedParts = () => axios.get(API_BASE_URL);

export const updateUtilizedPart = (orderId, itemId, utilizedPart) => axios.put(`${API_BASE_URL}/${orderId}/${itemId}`, utilizedPart);

export const deleteUtilizedPart = (orderId, itemId) => axios.delete(`${API_BASE_URL}/${orderId}/${itemId}`);
