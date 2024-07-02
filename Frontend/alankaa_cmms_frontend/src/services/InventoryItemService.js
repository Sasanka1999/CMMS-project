import axios from "axios";

const API_BASE_URL ='http://localhost:8080/api/inventory-items';

export const listInventoryItems = () => axios.get(API_BASE_URL);

export const createInventoryItem = (item) => axios.post(API_BASE_URL, item);

export const getInventoryItem = (itemId) => axios.get(API_BASE_URL + '/' + itemId);

export const updateInventoryItem = (itemId, item) => axios.put(API_BASE_URL + '/' + itemId, item);

export const deleteInventoryItem = (itemId) => axios.delete(API_BASE_URL + '/' + itemId);
