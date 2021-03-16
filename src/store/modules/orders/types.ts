export const Types = {
  GET_ORDERS: "GET_ORDERS",
  GET_ORDERS_LOADING: "GET_ORDERS_LOADING",
  GET_ORDERS_ERROR: "GET_ORDERS_ERROR",
};

export interface OrderInterface {
  id: string;
  status: string;
  total_order: number;
  update_datetime: string;
  wallet_payment_name: string;
}

export interface ActionInterface {
  type: keyof typeof Types;
  payload: OrderInterface[];
}

export interface OrderState {
  orders: OrderInterface[];
  isLoading: boolean;
  hasError: boolean;
}
