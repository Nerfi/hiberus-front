import React, { useContext } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { IProduct } from "../Product";
import { ItemsContext } from "../context/ItemsAddedContext";
import { SelectItemsContext } from "../context/SelectedItems";
import { ContextType, ItemsContextInterface } from "../Interfaces/ContextType";

const HomeAddToCartBtn = ({
  id,
  price,
  name,
  description,
  image,
  discount,
}: IProduct) => {
  const toast = useToast();
  const { setAddedItem } = useContext(ItemsContext) as ItemsContextInterface;
  const { setNumberItems } = useContext(SelectItemsContext) as ContextType;
  return (
    <>
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
    </>
  );
};

export default HomeAddToCartBtn;
