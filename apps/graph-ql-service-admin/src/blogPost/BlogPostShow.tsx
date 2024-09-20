import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOGPOST_TITLE_FIELD } from "./BlogPostTitle";

export const BlogPostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Author" source="author" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Comment"
          target="blogPostId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Author" source="author" />
            <ReferenceField
              label="BlogPost"
              source="blogpost.id"
              reference="BlogPost"
            >
              <TextField source={BLOGPOST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
