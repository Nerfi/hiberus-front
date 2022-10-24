import React from "react";
import { render, screen } from "@testing-library/react";
//import the component to test
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("it render with no crush", () => {
  //https://stackoverflow.com/questions/70743751/error-usehref-may-be-used-only-in-the-context-of-a-router-component-when-te
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const linkHouseElement = screen.getByText(/home/i);
  //screen.debug()
  const linkCartElement = screen.getByText(/address/i);

  //const linkCartElement = screen.getByText(/cart/i);
  expect(linkHouseElement).toBeInTheDocument();
  expect(linkCartElement).toBeInTheDocument();
});
