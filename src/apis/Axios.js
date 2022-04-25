import axios from "axios";

// Axios instance
export default axios.create({
  baseURL: "http://localhost:7000",
  headers: {
    "content-type": "application/json",
  },
});
