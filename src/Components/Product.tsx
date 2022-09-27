import React from "react";
import { Box, Image, Badge, Button, useToast } from "@chakra-ui/react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  key: number;
  discount?: string | null;
}
const Product: React.FC<Product> = ({
  id,
  name,
  description,
  image,
  price,
  discount,
}: Product) => {
  const toast = useToast();
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
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
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
            lineHeight="tight"
            noOfLines={1}
          >
            {description}
          </Box>
          <Box>
            {price}
            <Box as="span" color="gray.600" fontSize="sm">
              / $
            </Box>
          </Box>
          {/* find a way to let the user know that the product has discount*/}

          <Box>
            Discount:
            {discount}
            <Box as="span" color="gray.600" fontSize="sm">
              / $
            </Box>
          </Box>
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
                duration: 9000,
                isClosable: true,
              });

              alert(id);
            }}
            p="2px"
            mt="10px"
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Product;
