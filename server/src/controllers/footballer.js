"use strict";

const { success200 } = require("../responses/success");
const {
  error500
} = require("../responses/error");
const footballersList = require("../public/footballer.json");

const getFootballers = async (req, res) => {
  try {
    let footballers = footballersList.sort();
    if (req.query.search != null && req.query.search !== "") {
      const searchWord = new RegExp(`^${req.query.search}`, 'i');
      let matchedFootballers = footballers.filter(v => searchWord.test(v));
      footballers = matchedFootballers;
    }
    return success200(res, "Footballers displayed successfully", footballers);
  } catch (e) {
    return error500(res, e);
  }
};
module.exports = {
    getFootballers
};
