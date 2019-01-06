import React from 'react';
import { Form, Field } from 'react-final-form';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const ListForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit, pristine, invalid })=> (
      <form onSubmit={handleSubmit}>
        <Field name="name" component="input" placeholder="List Name" />

        <button type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  >
  </Form>
)

export default ListForm;
