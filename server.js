const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

//serve react build files
app.use(express.static(__dirname + "/public"));

//create connection to database
const db = mysql.createPool({
  host: process.env.DB_HOST, //localhost
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, //password
  database: process.env.DB,
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port " + listener.address().port);
});

app.get("/order/:id", (req, res) => {
  db.query(
    "SELECT * FROM db4d28bcf85ca347f1bc54a771012fcc51.OrderData WHERE SerialNumber_ID = ?",
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
