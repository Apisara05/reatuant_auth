import axios from "axios";
import TokenService from "./token.service"; // ✅ ชื่อไฟล์ควรสะกดตรงกัน

const api = axios.create({
  baseURL: "http://localhost:5000/api", // เปลี่ยน URL ตาม backend ของคุณ
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor ดัก token ก่อนยิง request
api.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
