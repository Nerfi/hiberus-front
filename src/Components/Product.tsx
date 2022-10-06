import React, { useContext } from "react";
import { Box, Image, Button, useToast, Flex } from "@chakra-ui/react";
import { SelectItemsContext } from "../Components/context/SelectedItems";
import {
  ContextType,
  ItemsContextInterface,
} from "../Components/Interfaces/ContextType";
import { ItemsContext } from "../Components/context/ItemsAddedContext";
import Discount from "../Components/UI/Discount";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  key: number;
  discount?: number;
  component: string;
}

const Product: React.FC<Product> = ({
  id,
  name,
  description,
  image,
  price,
  discount,
  component,
}: Product) => {
  const toast = useToast();
  const { setAddedItem } = useContext(ItemsContext) as ItemsContextInterface;
  const { setNumberItems } = useContext(SelectItemsContext) as ContextType;

  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        border="4px"
      >
        <Image src={image} alt={description} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {name}
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            maxW="150px"
            lineHeight="tight"
            noOfLines={1}
          >
            {description}
          </Box>

          {discount ? (
            <>
              <Discount price={price} discount={discount} />
            </>
          ) : (
            <Box>
              {price}
              <Box as="span" color="gray.600" fontSize="sm">
                / $
              </Box>
            </Box>
          )}

          {component !== "cart" ? (
            <Button
              as="button"
              borderRadius="md"
              bg="blue"
              color="white"
              onClick={() => {
                toast({
                  title: `${name}`,
                  description: "was added to your cart",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });

                setNumberItems((prev) => prev + 1);
                setAddedItem((prev) => [
                  ...prev,
                  { id, name, price, description, image, discount },
                ]);
              }}
              p="2px"
              mt="10px"
            >
              Add to cart
            </Button>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default Product;
