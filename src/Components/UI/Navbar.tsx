import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, Box, Icon } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";

const Navbar: React.FC = () => {
  return (
    <>
      <Flex justify="space-around" mt="1rem">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>{" "}
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/cart">Cart</Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box>
          <Link to="/cart">
            <Icon as={MdShoppingCart} />
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
