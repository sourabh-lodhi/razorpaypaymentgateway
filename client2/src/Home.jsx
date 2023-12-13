import React from "react";
import axios from "axios";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";

const Home = () => {
  const handleChange = async (amount) => {
    const { data } = await axios.post(`http://localhost:8000/createOrder`, {
      amount,
    });

    console.log(data);

    var options = {
      key: "rzp_test_aBiGnAuEaJjRVj",
      amount: data.order.amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.order.id,
      callback_url: "http://localhost:8000/paymentVarification",
      prefill: {
        name: "sourabh thakur",
        email: "sourabh.thakur@gmail.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <Box>
      <Stack direction={["column", "row"]}>
        <Card
          amount={500}
          image={
            "https://t4.ftcdn.net/jpg/01/38/62/89/360_F_138628958_UIfLqlIXSOfcZtpD4mDhaaHxumu4J1jd.jpg"
          }
          checkOutHandler={handleChange}
        />
        <Card
          amount={3000}
          image={
            "https://www.shutterstock.com/image-photo/camera-600nw-610909205.jpg"
          }
          checkOutHandler={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default Home;
