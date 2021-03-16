import { TypedUseSelectorHook, useSelector } from "react-redux";
import { OrderState } from "./orders/types";

export interface RootState {
  ordersList: OrderState;
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
