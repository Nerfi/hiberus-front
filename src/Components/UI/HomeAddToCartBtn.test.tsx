import React from "react";
import { render, screen } from "@testing-library/react";
//component to test
import HomeAddToCartBtn from "./HomeAddToCartBtn";

test("it render without crash", () => {
  render(
    <HomeAddToCartBtn
      key={0}
      id={0}
      name={""}
      description={""}
      image={""}
      price={0}
      discount={0}
    />
  );
});
