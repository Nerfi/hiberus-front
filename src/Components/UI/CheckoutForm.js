import React, { FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useItemsData } from "../context/ItemsAddedContext";
import { useToast } from "@chakra-ui/react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const addItem = useItemsData();
  const toast = useToast();

  const finalPayment = addItem.addItem
    .map((item) => {
      const withDiscount = item.discount
        ? item.price - item.discount
        : item.price;

      return withDiscount;
    })
    .reduce((prev, curr) => prev + curr, 0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    toast({
      title: `${error.message}`,
      status: "error",
      isClosable: true,
    });
  };

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "18px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement options={cardStyle} />
        <button type="submit" disabled={!stripe || !elements}>
          Pay: {finalPayment.toFixed(2)}
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
