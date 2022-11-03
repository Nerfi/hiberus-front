import React from "react";
import { render, screen } from "@testing-library/react";
import Product from "./Product";
import { ItemsContext } from "../Components/context/ItemsAddedContext";

const providerProps = {
  setAddedItem: jest.fn(),
  setNumberItems: jest.fn(),
  addItem: [], // in ItemsContext interface addItem is an array, here to as well
};

const wrapper = ({ children }: any) => (
  <ItemsContext.Provider value={providerProps}>
    {children}
  </ItemsContext.Provider>
);

//i18next
jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown

  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: jest.fn(),
      },
    };
  },
}));

test("renders component with no crush", () => {
  render(
    <Product
      id={1}
      key={1}
      name="DRINK"
      description="A deliciuos drink, you can buy it along the bottle to carry on the drink anywhere"
      image="someimg"
      price={8}
      discount={0}
    />,
    { wrapper: wrapper }
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
  const title = screen.getByRole("paragraph");
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(/drink/i);
  const description = screen.getByTestId(/description/i);
  expect(description).toBeInTheDocument();
  expect(description).toHaveTextContent(/a deliciuos drink/i);

  //testing if Discount component is present

  //discount
  //https://stackoverflow.com/questions/62078476/testing-conditional-rendering-that-relies-on-state-using-react-testing-library
  const discountCondition = screen.queryByTestId(/discount/i);
  expect(discountCondition).not.toBeInTheDocument();
});

test("<Product/> render with other props and show Discount component", () => {
  render(
    <Product
      id={2}
      key={2}
      name="BOTTLE"
      description="A bottle, you can buy it  to carry on the drink anywhere"
      image="bottle_img"
      price={10}
      discount={10}
    />,
    { wrapper: wrapper }
  );

  expect(screen.getByRole("img")).toBeInTheDocument();
  const title = screen.getByRole("paragraph");
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(/bottle/i);
  const description = screen.getByTestId(/description/i);
  expect(description).toBeInTheDocument();
  expect(description).toHaveTextContent(/a bottle, you can buy/i);
  const discountCondition = screen.queryByTestId(/discount/i);
  expect(discountCondition).toBeInTheDocument();
});
