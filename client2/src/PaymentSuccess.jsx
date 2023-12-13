import React from "react";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const serachQuery = useSearchParams()[0];
  const referenceNumber = serachQuery.get("reference");
  return (
    <Box>
      <VStack h={"100vh"} justifyContent={"center"}>
        <Heading textTransform={"uppercase"}> order successful</Heading>
        <Text>Refenece No. {referenceNumber}</Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
