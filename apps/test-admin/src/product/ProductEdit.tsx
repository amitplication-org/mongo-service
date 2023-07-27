import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="Product Type"
          source="productType"
          choices={[
            { label: "ELECTRONICS", value: "ELECTRONICS" },
            { label: "BOOKS", value: "BOOKS" },
            { label: "CLOTHING", value: "CLOTHING" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
