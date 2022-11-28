const User = require("./../models/usersModel");
const { createCustomer } = require("../middleware/customerMiddleware");
const {
  passwordHash,
  passwordConfirm,
} = require("../middleware/userMiddleware");

const userRegister = async (req, res) => {
  const body = req.body;
  try {
    const password = await passwordHash(body);

    const checkEmailExist = await User.count({
      where: { email: body.email },
    });
    if (checkEmailExist)
      return res.status(400).send({ Message: "This email already exists" });

    const customerId = await createCustomer(body);

    if (body.password === body.confirmPassword) {
      const user = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: password,
        phone: body.phone,
        media: body.media,
        gender: body.gender,
        customerId: customerId.id,
      });

      return res.status(200).send({
        userDetails: user,
        Message: "User Registered Successful",
      });
    } else {
      return res.status(400).send({ Message: "Passwords did not match" });
    }
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};

const userLogin = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findOne({
      where: { email: body.email },
    });
    if (user === null)
      return res.status(400).send({
        Message: "The email address you entered isn't connected to an account",
      });

    const password = await passwordConfirm(body, user);

    if (password === true) {
      return res.status(200).send({ Message: "Logged in successfully" });
    } else return res.status(400).send({ Message: "Passwords did not match" });
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
