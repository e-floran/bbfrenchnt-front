import axios from "axios";

export default axios.create({
  baseURL: "http://bbapi.buzzerbeater.com/",
  header: {
    "Access-Control-Allow-Origin": "http://bbapi.buzzerbeater.com/",
  },
});
