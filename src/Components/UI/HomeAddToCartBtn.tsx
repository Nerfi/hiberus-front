import React from "react";
//import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { IProduct } from "../Product";
import { useSelectedItems } from "../context/SelectedItems";
import { useItemsData } from "../context/ItemsAddedContext";
import { useTranslation } from "react-i18next";

//react bootstrap toast
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const HomeAddToCartBtn = ({
  id,
  price,
  name,
  description,
  image,
  discount,
}: IProduct) => {
  // const toast = useToast();
  const { setAddedItem } = useItemsData();
  const { setNumberItems } = useSelectedItems();
  const { t } = useTranslation(["translations", "translations"]);
  const [show, setShow] = useState<boolean>(false);

  function handleClicl() {
    /* toast({
      title: `${name}`,
      description: "was added to your cart",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    */
    setShow((prev) => !prev);
    setNumberItems((prev) => prev + 1);
    setAddedItem((prev) => [
      ...prev,
      { id, name, price, description, image, discount },
    ]);

    const timer = setTimeout(() => {
      setShow((prev) => !prev);
    }, 3500);

    return () => clearTimeout(timer);
  }

  return (
    <>
      <button
        style={{
          backgroundColor: "#2146C7",
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

      {show && (
        <ToastContainer
          style={{
            border: "solid red",
            top: "10rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            display: "flex",
            textAlign: "center",
            alignContent: "center",
            paddingTop: ".5rem",
          }}
        >
          <Toast
            style={{ margin: "0 auto" }}
            animation={true}
            bg="success"
            show={show}
            autohide={true}
          >
            <Toast.Header>{name}</Toast.Header>
            <Toast.Body>was added to your cart</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  );
};

export default HomeAddToCartBtn;
