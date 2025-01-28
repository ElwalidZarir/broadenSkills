import React, { useState } from "react";
import "./Application.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

type TData = {
  name: string;
  password: string;
};

const Application = () => {
  const initialValues = {
    name: "",
    password: "",
  };

  return (
    <div className="application">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors:{ name?:string, password?: string } ={}
          if (!values.name) {
            errors.name = "Required";
          } else if (!/^[A-Za-z\s]{2,50}$/.test(values.name)) {
            errors.name = "Invalid name";
          }
          return errors
        }}
        onSubmit={(values) => {
          fetch("http://localhost:8000/applications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <div className="input">
              <Field
                value={values.name}
                placeholder="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && errors.name}
            </div>
            <div className="input">
              <Field
                type="password"
                value={values.password}
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Application;
