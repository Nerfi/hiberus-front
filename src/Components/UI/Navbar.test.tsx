import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
//import the component to test
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

//global component DRY
const nav = (
  <Router>
    <Navbar />
  </Router>
);

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
