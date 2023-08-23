import React, { useReducer } from "react";
import { UIContext, uiReducer } from ".";

interface Props {
  children?: React.ReactNode;
}

export interface UIState {
  isOpenMenu: boolean;
  isYearly: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isOpenMenu: false,
  isYearly: false,
};

export const UIProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleMenu = (isOpen: boolean) => {
    dispatch({ type: "Toggle Menu", payload: isOpen });
  };

  const tooglePrice = (isYearly: boolean) => {
    dispatch({ type: "Toggle Price", payload: isYearly });
  };

  return <UIContext.Provider value={{ ...state, toggleMenu, tooglePrice }}>{children}</UIContext.Provider>;
};
