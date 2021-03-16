import axios from "axios";

export const baseUrlOrderList = process.env.REACT_APP_BASE_URL_ORDERS || "";
export const baseUrlSingleOrder = process.env.REACT_APP_BASE_URL_ORDER || "";
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}` ?? "",
  headers: {
    "content-type": "application/json",
  },
});

export default axiosInstance;
