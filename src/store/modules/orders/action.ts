import { Types, OrderInterface } from "./types";

export function GetOrdersList(
  payload: OrderInterface[]
): {
  type: string;
  payload: OrderInterface[];
} {
  return {
    type: Types.GET_ORDERS,
    payload,
  };
}

export function GetOrdersListIsLoading(): {
  type: string;
} {
  return {
    type: Types.GET_ORDERS_LOADING,
  };
}

export function GetOrdersListError(): {
  type: string;
} {
  return {
    type: Types.GET_ORDERS_ERROR,
  };
}
