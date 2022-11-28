const stripe = require("stripe")(
  "sk_test_51LazxlSHEfxkNFPFhkFH2nR3BS5mmEDKYcZbz1v1ElYZw5LWaI4SWqzqUWeB1gKef2vH2TzLVoTPYEzgbSEzkoN700BuAk2307"
);

const createCustomer = async (params) => {
  const customer = await stripe.customers.create({
    name: params.firstNmae,
    email: params.email,
    description: params.description,
  });
  return customer;
};

const findOneCustomer = async (params) => {
  const customerId = params.customerId;
  const customer = await stripe.customers.retrieve(customerId);
  return customer;
};

const updateCustomers = async (params) => {
  const customerId = params.customerId;
  const customer = await stripe.customers.update(customerId, {
    metadata: { order_id: params.orderId },
  });
  console.log("customer..", customer);
  return customer;
};
 
const deleteCustomer = async (params) => {
  const customerId = params.customerId;
  const customer = await stripe.customers.del(customerId);
  return customer;
};

const fetchAllCustomer = async (params) => {
  const customer = await stripe.customers.list({
    limit: params.limit,
  });
  console.log("customer..", customer);
  return customer;
};

module.exports = {
  createCustomer,
  findOneCustomer,
  updateCustomers,
  deleteCustomer,
  fetchAllCustomer,
};
