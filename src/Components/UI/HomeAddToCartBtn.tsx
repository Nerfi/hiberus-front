import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { IProduct } from "../Product";
import { useSelectedItems } from "../context/SelectedItems";
import { useItemsData } from "../context/ItemsAddedContext";
import { useTranslation } from "react-i18next";

const HomeAddToCartBtn = ({
  id,
  price,
  name,
  description,
  image,
  discount,
}: IProduct) => {
  const toast = useToast();
  const { setAddedItem } = useItemsData();
  const { setNumberItems } = useSelectedItems();
  const { t } = useTranslation(["translations", "translations"]);


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
        {t("addTo" , {ns: "translations"})}
      </Button>
    </>
  );
};

export default HomeAddToCartBtn;
