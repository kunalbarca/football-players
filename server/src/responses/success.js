"use strict";

const success200 = (res, message, data) => {
  return res.status(200).send({
    status: 200,
    message: message,
    data: data
  });
};

const success201 = (res, message, data) => {
  return res.status(201).send({
    status: 201,
    message: message,
    data: data
  });
};

module.exports = { success200, success201 };
