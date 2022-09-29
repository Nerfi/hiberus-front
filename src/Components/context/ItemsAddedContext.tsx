import React, { createContext, useState } from "react";
import { ContextProps } from "../Interfaces/ContextType";
import { Items, ItemsContextInterface } from "../Interfaces/ContextType";

export const ItemsContext = createContext<ItemsContextInterface | null>(null); // check this later on in cases
const ItemsAddedContext = ({ children }: ContextProps) => {
  const [addItem, setAddedItem] = useState<Items[]>([]);

  return (
    <ItemsContext.Provider value={{ addItem,setAddedItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsAddedContext;
