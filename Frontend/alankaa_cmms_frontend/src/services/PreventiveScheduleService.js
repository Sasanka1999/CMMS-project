import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/preventive-schedules';

export const listPreventiveSchedules = () => axios.get(API_BASE_URL);

export const createPreventiveSchedule = (preventiveSchedule) => axios.post(API_BASE_URL, preventiveSchedule);

export const getPreventiveScheduleById = (scheduleId) => axios.get(API_BASE_URL + '/' + scheduleId);

export const getAllPreventiveSchedules = () => axios.get(API_BASE_URL);

export const updatePreventiveSchedule = (scheduleId, preventiveSchedule) => axios.put(API_BASE_URL + '/' + scheduleId, preventiveSchedule);

export const deletePreventiveSchedule = (scheduleId) => axios.delete(API_BASE_URL + '/' + scheduleId);
