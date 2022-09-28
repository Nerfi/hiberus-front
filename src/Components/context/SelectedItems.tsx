import * as React from "react";
import { ContextType } from "../Interfaces/ContextType";
import { ContextProps } from "../Interfaces/ContextType";

export const SelectItemsContext = React.createContext<ContextType | number>(0);

const SelectedItems = ({ children }: ContextProps) => {
  const [numberItems, setNumberItems] = React.useState(0);

  return (
    <SelectItemsContext.Provider value={{ numberItems, setNumberItems }}>
      {children}
    </SelectItemsContext.Provider>
  );
};

export default SelectedItems;
