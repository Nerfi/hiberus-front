import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Discount from "../Components/UI/Discount";
import HomeAddToCartBtn from "./UI/HomeAddToCartBtn";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  key: number;
  discount: number;
  component?: string;
}

const Product: React.FC<IProduct> = ({
  id,
  name,
  description,
  image,
  price,
  discount,
  component,
}: IProduct) => {
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

          {component !== "cart" && (
            <HomeAddToCartBtn
              id={id}
              price={price}
              name={name}
              description={description}
              image={image}
              key={id}
              discount={discount}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Product;
