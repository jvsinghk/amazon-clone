import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-4afa0/us-central1/api",
  //"https://us-central1-clone-4afa0.cloudfunctions.net/api",
});

export default instance;
