import React, { FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

//añadir toas para  manerjar el error de la tarjeta
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setError(error && error.message);
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
      {error && error}
      <form onSubmit={handleSubmit}>
        <CardElement options={cardStyle} />
        <button type="submit" disabled={!stripe || !elements}>
          Pay:
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
