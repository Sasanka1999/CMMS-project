import axios from "axios";

const API_BASE_URL ='http://localhost:8080/api/maintenance-history';

export const listMaintenanceHistory = () => axios.get(API_BASE_URL);

export const createMaintenanceHistory = (maintenanceHistory) => axios.post(API_BASE_URL, maintenanceHistory);

export const getMaintenanceHistory = (historyId) => axios.get(`${API_BASE_URL}/${historyId}`);

export const updateMaintenanceHistory = (historyId, maintenanceHistory) => axios.put(`${API_BASE_URL}/${historyId}`, maintenanceHistory);

export const deleteMaintenanceHistory = (historyId) => axios.delete(`${API_BASE_URL}/${historyId}`);
