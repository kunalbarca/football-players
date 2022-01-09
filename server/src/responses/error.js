"use strict";

const error400 = (res, message) => {
  return res.status(400).send({
    status: 400,
    message: message,
    error: "Bad request"
  });
};

const error401 = (res, message) => {
  return res.status(401).send({
    status: 401,
    message: message,
    error: "Unauthorized"
  });
};

const error403 = (res, message) => {
  return res.status(403).send({
    status: 403,
    message: message,
    error: "Forbidden"
  });
};

const error404 = (res, message) => {
  return res.status(404).send({
    status: 404,
    message: message,
    error: "Not found"
  });
};

const error409 = (res, message) => {
  return res.status(409).send({
    status: 409,
    message: message,
    error: "Conflict"
  });
};

const error500 = (res, error) => {
  return res.status(500).send({
    status: 500,
    message: "Internal Server Error",
    error: error
  });
};

module.exports = { error400, error401, error403, error404, error409, error500 };
