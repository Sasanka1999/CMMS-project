import axios from "axios";

const API_BASE_URL ='http://localhost:8080/api/skills';

export const listSkills = () => axios.get(API_BASE_URL);

export const createSkill = (skill) => axios.post(API_BASE_URL, skill);

export const getSkill = (skillId) => axios.get(API_BASE_URL + '/' + skillId);

export const updateSkill = (skillId, skill) => axios.put(API_BASE_URL + '/' + skillId, skill);

export const deleteSkill = (skillId) => axios.delete(API_BASE_URL + '/' + skillId);
