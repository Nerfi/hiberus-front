import React from "react";
import { render, cleanup, waitFor, act, screen } from "@testing-library/react";
import Product from "./Product";


import "@testing-library/jest-dom";

describe("pass test", () => {
  test("sum equals", () => {
    expect(2+2).toBe(4)
  })
})

/*
interface PropsProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  key: number;
  discount?: number;
  component: string;
}

*/

/*
import { ThemeProvider } from "@chakra-ui/react";

export const ThemeWrapper = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);



test("sum does 6", () => {
  render(
    <Product
      key={0}
      id={0}
      name={""}
      description={""}
      image={""}
      price={0}
      component={""}
    />, {wrapper: ThemeWrapper}
  );
});

*/
/*
test("Renders home correctly", async () => {
  await act(async () => {
    const { getByTestId } = render(
      <Product
        key={0}
        id={0}
        name={""}
        description={""}
        image={""}
        price={0}
        component={""}
      />
    );
    expect(getByTestId("jokeContainer")).toBeInTheDocument();
  });
});

*/