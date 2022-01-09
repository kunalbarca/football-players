"use strict";

const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const base = express();
const version1 = express();
app.use(express.json());
app.use(cors());

const footballers = require("./routers/footballer");


app.use("/api", base);
base.use("/v1", version1);
version1.use(footballers);


const server = http.createServer(app);

module.exports = { server };
