import { UIState } from "./UIProvider";

type UIActionType = { type: "Toggle Menu"; payload: boolean } | { type: "Toggle Price"; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "Toggle Menu":
      return { ...state, isOpenMenu: action.payload };
    case "Toggle Price":
      return { ...state, isYearly: action.payload };
    default:
      return state;
  }
};
