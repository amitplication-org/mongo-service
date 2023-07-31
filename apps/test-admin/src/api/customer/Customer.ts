import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { SomeThing } from "../someThing/SomeThing";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  customerType?: "INDIVIDUAL" | "COMPANY" | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  someThing?: SomeThing | null;
  updatedAt: Date;
};
