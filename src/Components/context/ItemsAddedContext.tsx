import React, { useState, useContext, createContext } from "react";
import { Items, ItemsContextInterface } from "../Interfaces/ContextType";
import { ContextProps } from "../Interfaces/ContextType";

export const ItemsContext = createContext<ItemsContextInterface | null>(null);

export const ItemsContextProvider = ({ children }: ContextProps) => {
  const [addItem, setAddedItem] = useState<Items[]>([]);
  return (
    <ItemsContext.Provider value={{ addItem, setAddedItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsData = () => {
  const { addItem, setAddedItem } = useContext(
    ItemsContext
  ) as ItemsContextInterface;

  return { addItem, setAddedItem };
};
