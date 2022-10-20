import React from "react";
import Product from "../Product";
import { Box, Center, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useItemsData } from "../context/ItemsAddedContext";
//i18next
import { useTranslation } from "react-i18next";
//stripe payment component
import StripePayment from "./Stripe";

const Cart: React.FC = () => {
  const addItem = useItemsData();
  const { t } = useTranslation(["translations", "translations"]);

  const linkTo = <Link to="/">{t("add", { ns: "translations" })}</Link>;

  return (
    <>
      <Box>
        <Flex justify="center" p="3rem" w="100%" gap="10%" wrap="wrap">
          {!addItem.addItem.length
            ? linkTo
            : addItem.addItem.map((product) => (
                <Product key={product.id} {...product} component="cart" />
              ))}
        </Flex>
        <Center>
          <StripePayment />
        </Center>
      </Box>
    </>
  );
};

export default Cart;
