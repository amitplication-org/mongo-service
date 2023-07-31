import { InputJsonValue } from "../../types";

export type AdminCreateInput = {
  birthdate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
