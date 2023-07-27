import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Birthdate" source="birthdate" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Id" source="id" />
        <TextField label="Last Name" source="lastName" />
      </SimpleShowLayout>
    </Show>
  );
};
