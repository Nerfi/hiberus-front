import React, { useState, useContext, createContext } from "react";
import { ContextType } from "../Interfaces/ContextType";
import { ContextProps } from "../Interfaces/ContextType";

export const SelectItemsContext = createContext<ContextType | number>(0);

export const SelectedItemsProvider = ({ children }: ContextProps) => {
  const [numberItems, setNumberItems] = useState<number>(0);
  return (
    <SelectItemsContext.Provider value={{ numberItems, setNumberItems }}>
      {children}
    </SelectItemsContext.Provider>
  );
};

export const useSelectedItems = () => {
  const { numberItems, setNumberItems } = useContext(
    SelectItemsContext
  ) as ContextType;
  return { numberItems, setNumberItems };
};
