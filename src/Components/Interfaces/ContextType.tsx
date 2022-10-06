export interface ContextType {
  numberItems: number;
  setNumberItems: React.Dispatch<React.SetStateAction<number>>;
}

export interface ContextProps {
  children: React.ReactNode;
}

export interface Items {
  id: number;
  name: string;
  description: string;
  image: string; //comprobarlo despues
  price: number;
  discount: number;
}

export interface ItemsContextInterface {
  addItem: Items[];
  setAddedItem: React.Dispatch<React.SetStateAction<Items[]>>;
}
