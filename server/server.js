const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const routes = require("./routes/route");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(8000, () => {
  console.log(`server is running at port NO. ${8000}`);
});
