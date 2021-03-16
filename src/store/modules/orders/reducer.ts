import { ActionInterface, Types, OrderState } from "./types";

const INITIAL_STATE: OrderState = {
  orders: [],
  isLoading: false,
  hasError: false,
};

const ordersReducer = (
  state = INITIAL_STATE,
  action: ActionInterface
): OrderState => {
  switch (action.type) {
    case Types.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false,
        hasError: false,
      };
    case Types.GET_ORDERS_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case Types.GET_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default ordersReducer;
