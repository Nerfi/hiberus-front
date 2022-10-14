import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

//test code
const stripePromise = loadStripe("pk_test_Dt4ZBItXSZT1EzmOd8yCxonL");

const StripePayment = () => {
  const options = {
    //no se usa ya que esto es solo client-side de momento
    // passing the client secret obtained from the server
    clientSecret: "adasd_asdasdasdasda_asdas",
  };

  return (
    <div style={{border: "solid"}}>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripePayment;
