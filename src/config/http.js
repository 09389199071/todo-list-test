import axios from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },

  baseURL: "https://api.github.com/",
  timeout: 10000,
});

http.interceptors.response.use(function (response) {
  return response;
});

export default http;
