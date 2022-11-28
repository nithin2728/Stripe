const {
  findOneCustomer,
  updateCustomers,
  deleteCustomer,
  fetchAllCustomer,
} = require("../middleware/customerMiddleware");

const featchOneCustomer = async (req, res) => {
  const body = req.body;
  try {
    const featcOneCustomer = await findOneCustomer(body);
    return res.status(200).send({
      customerDetails: featcOneCustomer,
    });
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};

const updateCustomer = async (req, res) => {
  const body = req.body;
  try {
    const featcOneCustomer = await updateCustomers(body);
    return res.status(200).send({
      customerDetails: featcOneCustomer,
    });
  } catch (error) {
    return res.status(500).send({ Message: error });
  }
};

module.exports = {
  featchOneCustomer,
  updateCustomer
};
