
const {
  error500
} = require("../responses/error");

const auth = async (req, res, next) => {
  try {
    // here we can perform auth
    next();
  } catch (err) {
    console.error(err);
    return error500(res, err);
  }
};

module.exports = { auth };
