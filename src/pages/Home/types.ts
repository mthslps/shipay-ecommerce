export interface IOrder {
  id: string;
  status: string;
  total_order: number;
  update_datetime: string;
  wallet_payment_name: string;
}

export interface IOrderDetail {
  id: string;
  status: string;
  total_order: number;
  update_datetime: string;
  wallet_payment_id: null;
  product_id: string;
  product_name: string;
  product_description: string;
  product_image: string;
}

export interface IOrderResponse {
  orders: IOrder[];
}
