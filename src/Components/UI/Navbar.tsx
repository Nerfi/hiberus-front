import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Box,
  Flex,
  Icon,
  Circle,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { useSelectedItems } from "../context/SelectedItems";
//i18next
import { useTranslation } from "react-i18next";
import LanguageSwitcherBtn from "./LanguageSwitchBtn";

const Navbar: React.FC = () => {
  const { numberItems } = useSelectedItems();
  const { t } = useTranslation(["translations", "translations"]);
  return (
    <>
      <LanguageSwitcherBtn />

      <Flex justify="space-around" mt="1rem">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">{t("home", { ns: "translations" })}</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/cart"> {t("address", { ns: "translations" })} </Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box display="flex">
          <Link to="/cart">
            <Icon as={MdShoppingCart} />
          </Link>
          <Circle size="17px" bg="tomato" color="white">
            {numberItems}
          </Circle>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
