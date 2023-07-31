import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Birthdate" source="birthdate" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Password" source="password" />
        <div />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
