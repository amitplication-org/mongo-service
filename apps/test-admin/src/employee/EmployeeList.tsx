import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Birthdate" source="birthdate" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Id" source="id" />
        <TextField label="Last Name" source="lastName" />
      </Datagrid>
    </List>
  );
};
