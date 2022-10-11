import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Box,
  Icon,
  Circle,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { useSelectedItems } from "../context/SelectedItems";

//i18next
import { useTranslation, Trans } from "react-i18next";

//definning language switcher
const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

const Navbar: React.FC = () => {
  const { numberItems } = useSelectedItems();
  const { t, i18n } = useTranslation(["translations", "translations"]);
  return (
    <>
      {/*test content in order to follow tutorial, delete after
    https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
    */}
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng as keyof typeof lngs].nativeName}
          </button>
        ))}
      </div>
      <Flex justify="space-around" mt="1rem">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">
              {/*
              <Trans i18nKey="cart.home">Home</Trans>
              */}
              {t("home", {ns: "translations"})}
              
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/cart"> {t("address", {ns: "translations"})} </Link>
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
