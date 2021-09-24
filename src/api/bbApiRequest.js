import axios from "axios";

export default axios.create({
  baseURL: "http://bbapi.buzzerbeater.com/",
  header: {
    // "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
});
