const express = require("express");
const {
  createOrder,
  paymentVarification,
} = require("../controllers/controller");
const router = express();

router.route("/createOrder").post(createOrder);
router.route("/paymentVarification").post(paymentVarification);

module.exports = router;
