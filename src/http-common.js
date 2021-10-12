import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "dev"
      ? `http://localhost:3306`
      : "https://pygmalion-serial.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
