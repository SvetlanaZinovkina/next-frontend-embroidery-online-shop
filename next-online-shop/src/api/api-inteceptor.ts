import axios from "axios";

export { getContentType } from "./api-helper";

const instance = axios.create({
  baseURL: "http://45.12.239.121:5001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
