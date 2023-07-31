import { InputJsonValue } from "../../types";

export type AdminUpdateInput = {
  birthdate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
