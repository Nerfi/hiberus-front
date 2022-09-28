import React, { useContext } from "react";
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
import { SelectItemsContext } from "../context/SelectedItems";
import { ContextType } from "../Interfaces/ContextType";

const Navbar: React.FC = () => {
  const { numberItems } = useContext(SelectItemsContext) as ContextType;
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
