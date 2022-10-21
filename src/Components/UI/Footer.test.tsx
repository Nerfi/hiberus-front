import React from "react";
import { render, screen } from "@testing-library/react";
import SmallWithSocial from "./Footer";

test("renders the component withou crash", () => {
  render(<SmallWithSocial />);
  expect(screen.getByText(/all right reserved/i)).toBeInTheDocument();
});
