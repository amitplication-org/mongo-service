import { JsonValue } from "type-fest";

export type Admin = {
  birthdate: Date | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  password: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
