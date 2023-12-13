import React from "react";
import { VStack, Image, Text, Button } from "@chakra-ui/react";

const Card = ({ image, amount, checkOutHandler }) => {
  return (
    <VStack>
      <Image src={image} boxSize={"80"} objectFit={"cover"}></Image>
      <Text>{amount}</Text>
      <Button onClick={() => checkOutHandler(amount)}>Buy Now</Button>
    </VStack>
  );
};

export default Card;
