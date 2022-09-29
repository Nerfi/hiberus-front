import React, { useContext } from "react";
import Product from "../Product";
import { Box, Center, Flex } from "@chakra-ui/react";
import { ItemsContext } from "../context/ItemsAddedContext";
import { ItemsContextInterface } from "../Interfaces/ContextType";

const Cart: React.FC = () => {
  const { addItem } = useContext(ItemsContext) as ItemsContextInterface;
  console.log(addItem, "ad item ");

  return (
    <>
      <Box h="90vh">
        <Center bg="transparent" h="90vh" color="black">
          <Flex
            justify="center"
            m="6em"
            w="100%"
            gap="10%"
            wrap="wrap"
            h="60vh"
          >
            {!addItem.length
              ? "Add somethign to your shopping cart"
              : addItem.map((product) => (
                  <Product key={product.id} {...product} component="cart" />
                ))}
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default Cart;
