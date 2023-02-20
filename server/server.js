const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("./db/conn");
//const User = require("./models/userSchema");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.set("view engine", "ejs");

// SET STORAGE

const auth = require("./router/auth");

app.use(express.json());

app.use("/", auth);

app.listen(5000, () => {
  console.log(`server is running at port 5000`);
});
