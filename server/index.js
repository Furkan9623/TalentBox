const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const router = require("./router/user-router");
const ConnectDB = require("./config/db");
dotenv.config();
ConnectDB();
const app = express();
// middleware
app.use(cors());
app.use(express.json());

// router
app.use("/api/v1", router);
// server run
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`);
});

server.on("listening", () => {
  console.log("DATA CONNECTED....");
});

server.on("error", (error) => {
  console.log("DATA NOT CONNECTED>>>", error);
});
