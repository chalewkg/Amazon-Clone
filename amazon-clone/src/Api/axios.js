import axios from "axios";

const axiosInstance = axios.create({
  // Local instance of firebase
  // baseURL: "http://127.0.0.1:5001/clone-85937/us-central1/api",

  //Deployed version of fire base
  baseURL: "https://api-xyos2dqtva-uc.a.run.app",

  // deployed version of amoazon server on render.com using express with out firebase function
  // baseURL: "https://amazon-api-deploy-e323.onrender.com/",
});

export { axiosInstance };
