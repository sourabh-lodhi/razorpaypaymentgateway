const Razorpay = require("razorpay");
var crypto = require("crypto");

const RazorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

const createOrder = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    const order = await RazorpayInstance.orders.create(options);
    res.status(200).json({
      message: "Create order successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const paymentVarification = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    const obj = razorpay_order_id + "|" + razorpay_payment_id;

    const generated_signature = crypto
      .createHmac("SHA256", process.env.RAZORPAY_SECRET_KEY)
      .update(obj.toString())
      .digest("hex");

    if (generated_signature == razorpay_signature) {
      res.redirect(
        `http://localhost:3000/paymentVarification?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(400).json({
        message: "Signature is not correct",
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  paymentVarification,
};
