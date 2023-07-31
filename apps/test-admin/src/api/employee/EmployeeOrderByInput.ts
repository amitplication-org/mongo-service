import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  birthdate?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
};
