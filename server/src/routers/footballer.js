"use strict";
const Middleware = require("../middleware/auth");

const express = require("express");
const app = express();
const router = new express.Router();
const Controller = require("../controllers/footballer");

router.get("/footballers", Middleware.auth, Controller.getFootballers);

app.use("/v1", router);

module.exports = router;
