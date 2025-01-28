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
        onSubmit={(values) => {
          fetch("http://localhost:8000/applications",{
            method:"POST",
            headers: {
                "Content-Type" :"application/json"
            },
            body:JSON.stringify(values)
          })
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              value={values.name}
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            <Field
              type="password"
              value={values.password}
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Application;
