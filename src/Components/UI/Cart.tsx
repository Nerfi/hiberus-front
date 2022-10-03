import React, { useContext } from "react";
import Product from "../Product";
import { Box, Center, Flex } from "@chakra-ui/react";
import { ItemsContext } from "../context/ItemsAddedContext";
import { ItemsContextInterface } from "../Interfaces/ContextType";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { addItem } = useContext(ItemsContext) as ItemsContextInterface;
  const linkTo = <Link to="/">Add somethign to your shopping cart</Link>;

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
              ? linkTo
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
