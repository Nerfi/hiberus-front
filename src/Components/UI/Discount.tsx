import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface DiscountProps {
  price: number;
  discount?: number;
}

const Discount: React.FC<DiscountProps> = ({
  price,
  discount,
}: DiscountProps) => {
  const calculatePriceAfterDiscount = (
    price: number,
    discount?: number
  ): number => {
    const realPrice = Number(price) - Number(discount);
    return Number(realPrice.toFixed(2));
  };
  return (
    <>
      <Flex gap=".5rem">
        Antes:
        <Box textDecoration="line-through">
          {price}
          <Box as="span" color="gray.600" fontSize="sm">
            / $
          </Box>
        </Box>
      </Flex>
      <div
        style={{
          backgroundColor: "red",
          minWidth: "80px",
          width: "80px",
        }}
      >
        En Oferta
      </div>
      <Box>
        Ahora: {calculatePriceAfterDiscount(price, discount)}
        <Box as="span" color="gray.600" fontSize="sm">
          / $
        </Box>
      </Box>
    </>
  );
};

export default Discount;
