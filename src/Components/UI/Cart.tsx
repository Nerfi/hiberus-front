import React from "react";
import Product from "../Product";
import { Box, Center } from "@chakra-ui/react";



const Cart: React.FC = () => {
  return (
    <>
      <Box border="solid 2px red" h="90vh">
        <Center bg="transparent" h="90vh" color="black">
          here goes the products the user has selected
        </Center>
      </Box>
    </>
  );
};

export default Cart;
