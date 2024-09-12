import axios from "axios";

const axiosClassic = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://45.12.239.121:5001/api/v1/",
});

export default axiosClassic;
