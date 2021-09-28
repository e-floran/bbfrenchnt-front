import axios from "axios";

export default axios.create({
  // baseURL: "https://bbapi.buzzerbeater.com/",
  baseURL: "/",
  header: {
    // "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
});
