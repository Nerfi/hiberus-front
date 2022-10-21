import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./UI/Cart";
import Products from "./UI/Products";

interface RoutesCompProps {
  children: React.ReactNode;
}
const RoutesComp = ({ children }: RoutesCompProps) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
      </Routes>
      <ChakraProvider></ChakraProvider>
    </BrowserRouter>
  );
};

export default RoutesComp;
