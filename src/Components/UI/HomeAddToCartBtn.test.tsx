import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//component to test that consumes the context
import HomeAddToCartBtn from "./HomeAddToCartBtn";
//import context
import { ItemsContext } from "../context/ItemsAddedContext";
//import the second context in order to make the test worked
import { SelectItemsContext } from "../context/SelectedItems";
//interface product
import { IProduct } from "../Product";

// A custom provider, not the ItemsContext, to test it in isolation.
// This customRender will be a fake ItemsContext, one that I can controll to abstract of ItemsContext issues.

const customRender = (
  ui: React.ReactNode,
  { providerProps, ...renderOptions }: any
) => {
  return render(
    <ItemsContext.Provider value={providerProps}>
      <SelectItemsContext.Provider value={providerProps}>
        {ui}
        {/*<button data-testid="btnToTestFuncCalls"></button> */}
      </SelectItemsContext.Provider>
    </ItemsContext.Provider>,
    renderOptions
  );
};

//testing i18 from docs

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown

  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

//

//interface for providerProps
interface ProProps {
  setAddedItem({
    id,
    name,
    price,
    description,
    image,
    discount,
  }: IProduct): () => void;

  setNumberItems: () => number;
  setShow: () => boolean;
}

describe("testing context consumer", () => {
  let providerProps: ProProps;
  providerProps = {
    setAddedItem: jest.fn(),
    setNumberItems: jest.fn(),
    setShow: jest.fn(),
  };

  test("should call functions when button click", () => {
    customRender(
      <HomeAddToCartBtn
        key={0}
        id={0}
        name={""}
        description={""}
        image={""}
        price={0}
        discount={0}
      />,
      { providerProps }
    );

    const addToCartBtn = screen.getByRole("button");

    expect(addToCartBtn).toBeInTheDocument();
    //console.log(addToCartBtn.textContent)
    expect(addToCartBtn.textContent).toBe("addTo");
    //calling the funcitons

    userEvent.click(addToCartBtn);
    //maybe this is not workign cause is not from context, need to have a check
    //its a local state update
    //expect(providerProps.setShow).toHaveBeenCalled();
    expect(providerProps.setAddedItem).toHaveBeenCalled();
    //expect(providerProps.setAddedItem).toHaveBeenCalledWith(id, name,price,)
    expect(providerProps.setNumberItems).toHaveBeenCalled();
    //expect(providerProps.setShow).toHaveBeenCalled();
  });
});
