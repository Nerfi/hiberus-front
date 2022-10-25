import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import { IProduct } from "../Product";
import { useSelectedItems } from "../context/SelectedItems";
import { useItemsData } from "../context/ItemsAddedContext";
import { useTranslation } from "react-i18next";

//reescribir componente para pasar tests
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

  function handleClicl() {
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
  }

  return (
    <>
      <button
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "#fff",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
        }}
        onClick={handleClicl}
      >
     
        {t("addTo", { ns: "translations" })}
      </button>
    </>
  );
};

export default HomeAddToCartBtn;
