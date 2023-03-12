import './form.css';

import { ErrorMessage,Field, Form, Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

import { Input } from '../input/input.component';

interface FormValues {
  name: string;
  email: string;
}

export const MyForm = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  const onSubmit = (values: FormValues) => {
    console.log('Form submitted with values: ', values);
  };

  return (
    <div>
      <h1>Form to test input component with formik and yup</h1>
      <p>The Input Component functions correctly, but but not with formik yet.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <Form>
            <Field name="name">
              {(fieldProps) => <Input label="Name" {...fieldProps} />}
            </Field>
            <ErrorMessage name="name" />

            <Field name="email">
              {(fieldProps) => <Input label="Email" hint="hint: this is your email address" {...fieldProps} />}
            </Field>
            <ErrorMessage name="email" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
