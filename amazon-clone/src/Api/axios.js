import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-85937/us-central1/api",
  baseURL: "https://api-xyos2dqtva-uc.a.run.app",
});

export { axiosInstance };
