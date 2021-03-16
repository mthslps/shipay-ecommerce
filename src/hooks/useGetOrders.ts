import React from "react";
import { useDispatch } from "react-redux";

import api, { baseUrlOrderList } from "../services/api";
import { useTypedSelector } from "../store/modules/rootState";
import {
  GetOrdersList,
  GetOrdersListIsLoading,
  GetOrdersListError,
} from "../store/modules/orders/action";

import { OrderState } from "../store/modules/orders/types";

interface UseGetOrders extends OrderState {
  loadOrders: () => Promise<void>;
}

const useGetOrders = (): UseGetOrders => {
  const dispatch = useDispatch();

  const { orders, isLoading, hasError } = useTypedSelector((store) => ({
    orders: store.ordersList.orders,
    isLoading: store.ordersList.isLoading,
    hasError: store.ordersList.hasError,
  }));

  const loadOrders = React.useCallback(async (): Promise<void> => {
    dispatch(GetOrdersListIsLoading());
    await api
      .get(baseUrlOrderList)
      .then(
        (response) =>
          response.data.orders.length > 0 &&
          dispatch(GetOrdersList(response.data.orders))
      )
      .catch(() => {
        dispatch(GetOrdersListError());
      });
  }, [dispatch]);

  return { orders, hasError, isLoading, loadOrders };
};

export default useGetOrders;
