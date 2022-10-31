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
import { Trans, withTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next"; // A custom provider, not the ItemsContext, to test it in isolation.
// This customRender will be a fake ItemsContext, one that I can controll to abstract of ItemsContext issues.
import LanguageDetector from "i18next-browser-languagedetector";
//json with translations
import translationsEn from "../../../public/locales/en/translations.json";
import translationsDe from "../../../public/locales/de/translations.json";
const customRender = (
  ui: React.ReactNode,
  { providerProps, ...renderOptions }: any
) => {
  return render(
    <ItemsContext.Provider value={providerProps}>
      <SelectItemsContext.Provider value={providerProps}>
        {ui}
      </SelectItemsContext.Provider>
    </ItemsContext.Provider>,
    renderOptions
  );
};

//testing i18 from docs

const resources = {
  en: {
    translation: translationsEn,
  },
  de: {
    translation: translationsDe,
  },
};

/*
jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown

  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: jest.fn() 
      },
    };
  },
}));
*/

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

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

let providerProps: ProProps;
providerProps = {
  setAddedItem: jest.fn(),
  setNumberItems: jest.fn(),
  setShow: jest.fn(),
};

describe("testing context consumer", () => {
  test("should call functions when button click", () => {
    customRender(
      <HomeAddToCartBtn
        key={0}
        id={0}
        name="Bag"
        description="A beautiful bag"
        image={""}
        price={10.89}
        discount={10}
      />,
      { providerProps }
    );

    const addToCartBtn = screen.getByRole("button");

    expect(addToCartBtn).toBeInTheDocument();
    expect(addToCartBtn.textContent).toBe("addTo");
    //calling the funcitons

    userEvent.click(addToCartBtn);
    //maybe this is not workign cause is not from context, need to have a check
    //its a local state update
    //expect(providerProps.setShow).toHaveBeenCalled();
    expect(providerProps.setAddedItem).toHaveBeenCalled();
    expect(providerProps.setAddedItem).toHaveBeenCalledTimes(1);
    //expect(providerProps.setAddedItem).toHaveBeenCalledWith(id, name,price,)
    expect(providerProps.setNumberItems).toHaveBeenCalled();
    expect(providerProps.setNumberItems).toHaveBeenCalledTimes(1);
    //expect(providerProps.setShow).toHaveBeenCalled();
    //expect(providerProps.setShow).toHaveBeenCalled()
  });
});

//testing change language when btn clikde
//mock component for testing
const MainView = withTranslation()((props) => {
  return (
    <>
      <div className="App-header">
        <button onClick={() => props.i18n.changeLanguage("de")}>de</button>
        <button onClick={() => props.i18n.changeLanguage("en")}>en</button>
      </div>
      <button>
        <Trans i18nKey="addTo">AddTo</Trans>
      </button>
    </>
  );
});

describe("<HomeAddToCartBtn/> change language when selected new language", () => {
  test("change title of btn when selected new lng", () => {
    render(<MainView />);

    expect(screen.getByRole("button", { name: "en" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "de" })).toBeInTheDocument();
    //user events and change language
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toHaveTextContent(/add to cart/i);
    userEvent.click(screen.getByRole("button", { name: "en" }));
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toHaveTextContent(/add to cart/i);

    userEvent.click(screen.getByRole("button", { name: "de" }));
    expect(
      screen.getByRole("button", { name: /zum Warenkorb hinzufügen/i })
    ).toHaveTextContent(/zum Warenkorb hinzufügen/i);
  });
});
