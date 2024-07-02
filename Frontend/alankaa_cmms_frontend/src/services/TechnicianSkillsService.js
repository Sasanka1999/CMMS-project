import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/technician-skills';

export const listTechnicianSkills = () => axios.get(API_BASE_URL);

export const createTechnicianSkill = (technicianSkill) => axios.post(API_BASE_URL, technicianSkill);

export const getTechnicianSkillById = (technicianId, skillId) => axios.get(`${API_BASE_URL}/${technicianId}/${skillId}`);

export const updateTechnicianSkill = (technicianId, skillId, technicianSkill) => axios.put(`${API_BASE_URL}/${technicianId}/${skillId}`, technicianSkill);

export const deleteTechnicianSkill = (technicianId, skillId) => axios.delete(`${API_BASE_URL}/${technicianId}/${skillId}`);
