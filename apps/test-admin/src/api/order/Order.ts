import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  status?: "PENDING" | "COMPLETED" | "CANCELLED" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
