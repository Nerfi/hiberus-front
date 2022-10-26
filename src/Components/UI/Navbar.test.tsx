import React from "react";
import { render, screen, within } from "@testing-library/react";
//import the component to test
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
//i18 testing
import {
  initReactI18next,
  I18nextProvider,
  Trans,
  withTranslation,
} from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import userEvent from "@testing-library/user-event";
//
import translationsEn from "../../../public/locales/en/translations.json";
import translationsDe from "../../../public/locales/de/translations.json";

//global component DRY
const nav = (
  <Router>
    <Navbar />
  </Router>
);

//languages

const resources = {
  en: {
    translation: translationsEn,
  },
  de: {
    translation: translationsDe,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      en: resources.en,
      de: resources.de,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

const MainView = withTranslation()((props) => {
  return (
    <>
      <div className="App-header">
        <button onClick={() => props.i18n.changeLanguage("de")}>de</button>
        <button onClick={() => props.i18n.changeLanguage("en")}>en</button>
      </div>
      <ul aria-labelledby="navbar-heading">
        <li>
          <Trans i18nKey="home">Home</Trans>
        </li>
        <li>
          <Trans i18nKey="address">Cart</Trans>
        </li>
      </ul>
    </>
  );
});

//revisar el nombre dado a la funcion
function rendesr(ui: JSX.Element, options?: {}) {
  function Wrapper({ children }: any) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  }
  return {
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
}

test("it render with no crush", () => {
  //https://stackoverflow.com/questions/70743751/error-usehref-may-be-used-only-in-the-context-of-a-router-component-when-te
  render(nav);
  const linkHouseElement = screen.getByText(/home/i);
  //screen.debug()
  const linkCartElement = screen.getByText(/address/i);

  //const linkCartElement = screen.getByText(/cart/i);
  expect(linkHouseElement).toBeInTheDocument();
  expect(linkCartElement).toBeInTheDocument();
});

test("it shows button to toggle languages", () => {
  //testing buttons with english and deutchs labels
  render(nav);
  expect(screen.getByRole("button", { name: /english/i }));
  expect(screen.getByRole("button", { name: /Deutsch/i }));
});

//test click in button and change laguage

test("it should test lang", () => {
  rendesr(<MainView useSuspense={false} />);
  const enBtn = screen.getByRole("button", { name: /en/i });
  const deBtn = screen.getByRole("button", { name: /de/i });

  //selecting the LI in order to make sure it has the desire length
  const homeChangeName = screen.getByRole("list");
  const { getAllByRole } = within(homeChangeName);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(2);

  const listElementToChange = screen.getAllByRole("listitem");

  //default values
  expect(listElementToChange[1]).toHaveTextContent(/cart/i);
  expect(listElementToChange[0]).toHaveTextContent(/home/i);
  userEvent.click(deBtn);
  expect(listElementToChange[0]).toHaveTextContent(/Haus/i);
  expect(listElementToChange[1]).toHaveTextContent(/Wagen/i);
  userEvent.click(enBtn);
  expect(listElementToChange[1]).toHaveTextContent(/cart/i);
  expect(listElementToChange[0]).toHaveTextContent(/home/i);
});
