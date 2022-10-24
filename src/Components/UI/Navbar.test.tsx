import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
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

//global component DRY
const nav = (
  <Router>
    <Navbar />
  </Router>
);

//languages
const resources = {
  en: {
    translation: {
      " home": "Home",
      address: "Cart",
    },
  },
  de: {
    translation: {
      home: "Haus ",
      address: "Wagen ",
      //"Welcome to React": "Bem vindo ao React e ao react-i18next",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
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
      <ul>
        <li>
          <Trans>Home</Trans>
        </li>
        <li>
          <Trans>Cart</Trans>
        </li>
      </ul>
    </>
  );
});

//revisar el nombre dado a la funcion
function rendesr(ui: JSX.Element, options?: undefined) {
  function Wrapper({ children }: any) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
  }
  return {
    ...render(ui, { wrapper: Wrapper }),
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
  //const enBtn = screen.getByRole("button", { name: /english/i });
  //const deBtn = screen.getByRole("button", { name: /Deutsch/i });
  //const linkHouseElement = screen.getByText(/home/i);
  // aqui nosotros heading lo cambiamos para seleccionar lo que nososotros queremos y sabemos que va cambiar de lang
  //const homeChangeName = screen.getByRole("link", { name: /home/i });
  //const cartChangeName = screen.getByRole("link", { name: /address/i });
  //expect(enBtn).toHaveTextContent("English") workign
  //tenemos que añadir lo que aparece en sandbox y qe no he puesto
  //MainView es el componente
  //userEvent.click(deBtn);
  //expect(linkHouseElement).toHaveTextContent(/haus/i);
});

/*
test("incremenet number item when click on select one", () => {
  // const user =  userEvent.setup()
  render(
    <Router>
      <Navbar />
    </Router>
  );

  //mock function jest
  const mockFucntionClicked = jest.fn().mockName("setNumberItems");
  //llamar a la funciton con user event 
  screen.debug()
  
});
*/
