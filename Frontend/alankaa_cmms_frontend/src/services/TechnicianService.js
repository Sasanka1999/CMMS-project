import axios from "axios";

const API_BASE_URL ='http://localhost:8080/api/technicians';

export const listTechnicians = () => axios.get(API_BASE_URL);

export const createTechnician = (technician) => axios.post(API_BASE_URL, technician);

export const getTechnician = (technicianId) => axios.get(API_BASE_URL + '/' + technicianId);

export const updateTechnician = (technicianId, technician) => axios.put(API_BASE_URL + '/' + technicianId, technician);

export const deleteTechnician = (technicianId) => axios.delete(API_BASE_URL + '/' + technicianId);
