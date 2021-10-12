import axios from "axios";

export default axios.create({
  baseURL: "https://pygmalion-serial.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
