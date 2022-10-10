import React, { useContext } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { IProduct } from "../Product";
import { SelectItemsContext } from "../context/SelectedItems";
import { ContextType, ItemsContextInterface } from "../Interfaces/ContextType";
//custom hook context
import { useItemsData } from "../context/ItemsAddedContext";

const HomeAddToCartBtn = ({
  id,
  price,
  name,
  description,
  image,
  discount,
}: IProduct) => {
  const toast = useToast();
  const { setNumberItems } = useContext(SelectItemsContext) as ContextType;
  //custom context hook
  const  {setAddedItem}  = useItemsData();
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
