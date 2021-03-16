import { Types } from "./types";
import {
  GetOrdersList,
  GetOrdersListIsLoading,
  GetOrdersListError,
} from "./action";

describe("Orders Actions", () => {
  test("if GetOrdersList returns the correct object", () => {
    expect(
      GetOrdersList([
        {
          id: "6be41d4e-5248-43f7-99f9-fbedd78d0db9",
          status: "cancelled",
          total_order: 0.51,
          update_datetime: "29-12-2020 17:19:15",
          wallet_payment_name: "shipay-ewallet-mock",
        },
      ])
    ).toEqual({
      type: Types.GET_ORDERS,
      payload: [
        {
          id: "6be41d4e-5248-43f7-99f9-fbedd78d0db9",
          status: "cancelled",
          total_order: 0.51,
          update_datetime: "29-12-2020 17:19:15",
          wallet_payment_name: "shipay-ewallet-mock",
        },
      ],
    });
  });

  test("if GetOrdersListIsLoading returns the correct object", () => {
    expect(GetOrdersListIsLoading()).toEqual({
      type: Types.GET_ORDERS_LOADING,
    });
  });

  test("if GetOrdersListError returns the correct object", () => {
    expect(GetOrdersListError()).toEqual({
      type: Types.GET_ORDERS_ERROR,
    });
  });
});
