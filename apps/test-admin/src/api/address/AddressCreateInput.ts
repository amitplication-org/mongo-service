import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
