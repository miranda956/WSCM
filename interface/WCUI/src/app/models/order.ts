export interface Order {
  id: number;
  type: string;
  status: string;
  order_total_price: number;
  item_Discount: number;
  tax: number;
  total: number;
  grandTotal: number;
  shipping: number;
  quantity: number;


}
