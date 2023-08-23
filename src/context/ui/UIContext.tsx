import { createContext } from "react";

interface ContextProps {
  isOpenMenu: boolean;
  toggleMenu: (isOpen: boolean) => void;
  isYearly: boolean;
  tooglePrice: (isYearly: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
