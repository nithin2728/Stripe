const bcrypt = require("bcrypt");

const passwordHash = async (params) => {
  const password = await new Promise((resolve, reject) => {
    bcrypt.hash(params.password, 10, function (err, hash) {
      resolve(hash);
    });
  });
  return password;
};

const passwordConfirm = async (params, user) => {
  const password = await new Promise((resolve, reject) => {
    bcrypt.compare(params.password, user.password, function (err, result) {
      console.log("result..", result);
      resolve(result);
    });
  });
  return password;
};

module.exports = {
  passwordHash,
  passwordConfirm,
};
