import React from "react";
import Product from "../Product";
import { Box, Center, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useItemsData } from "../context/ItemsAddedContext";
//i18next
import { useTranslation } from "react-i18next";

const Cart: React.FC = () => {
  const addItem = useItemsData();
  const { t, i18n } = useTranslation();

  const linkTo = <Link to="/">{t("cart.add")}</Link>;

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
            {!addItem.addItem.length
              ? linkTo
              : addItem.addItem.map((product) => (
                  <Product key={product.id} {...product} component="cart" />
                ))}
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default Cart;
