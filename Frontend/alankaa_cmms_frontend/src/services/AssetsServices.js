import axios from "axios";

const API_BASE_URL ='http://localhost:8080/api/assets';

export const listAssets = () => axios.get(API_BASE_URL);

export const createAsset = (asset) => axios.post(API_BASE_URL, asset);

export const getAsset = (assetId) => axios.get(API_BASE_URL + '/' + assetId);

export const updateAsset = (assetId, asset) => axios.put(API_BASE_URL + '/' + assetId, asset);

export const deleteAsset = (assetId) => axios.delete(API_BASE_URL + '/' + assetId);
