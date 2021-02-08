const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createPool({
  host: "std-mysql",
  user: "std_237",
  database: "std_237",
  password: "Qaa123321@",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  const sqlSelect = "SELECT * FROM welbex";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Server is started on port 3001");
});
