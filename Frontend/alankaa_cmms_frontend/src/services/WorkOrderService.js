import axios from "axios";

const API_BASE_URL ='http://localhost:8080/api/work-orders';

export const listWorkOrders = () => axios.get(API_BASE_URL);

export const createWorkOrder = (workOrder) => axios.post(API_BASE_URL, workOrder);

export const getWorkOrderById = (orderId) => axios.get(API_BASE_URL + '/' + orderId);

export const getAllWorkOrders = () => axios.get(API_BASE_URL);

export const updateWorkOrder = (orderId, workOrder) => axios.put(API_BASE_URL + '/' + orderId, workOrder);

export const deleteWorkOrder = (orderId) => axios.delete(API_BASE_URL + '/' + orderId);
