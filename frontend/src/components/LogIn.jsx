import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../api/axios';
import swal from "sweetalert2";
import { saveToLocal } from "../functions/localStorage";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";

const Login = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validate={(values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email";
      }
      const passwordRegex = /(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9])/;
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else if (!passwordRegex.test(values.password)) {
        errors.password =
          "Invalid password. Must contain one number, one uppercase and one lowercase";
      }
      return errors;
    }}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <section className='mx-auto col-4'>
        <Card style={{ backgroundColor: '#d1d8e0' }}>
            <Card.Header className='py-3 mb-5 text-center' style={{ backgroundColor: '#a5b1c2' }}>
                <h5><b>Sign In</b></h5>
            </Card.Header>
            <Form.Group controlId="formBasic" onSubmit={handleSubmit}>
                <Form.Control type="email" name='email' id='email' placeholder="Enter email" className={
                 "col-8 mx-auto" && errors.email && touched.email && "error"
              }
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}/>
              {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
                <Form.Control type="password" name='password' id='password' placeholder="Password" className={
                    "col-5 mx-auto" &&
                errors.password &&
                touched.password &&
                "error"
              }
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}/>
              {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            </Form.Group>
                <Button disabled={isSubmitting} className='btn col-5 mx-auto mt-4 mb-2' style={{ backgroundColor: '#44bd32', border: '2px solid #44bd32' }} onClick={(event) => {
                if(values['email']!=='' &&values['password']!==''){
                  event.preventDefault();
                  api.post("/", {
                    email: values.email,
                    password: values.password,
                  }).then((res) => {
                      if (res.data[0] === undefined) {                        
                        swal.fire({
                          title: "Incorrect info",
                          text: "Data is not registered. Please Sign up.",
                          icon: "error",
                          confirmButtonText: "Got It!",
                          confirmButtonColor: "#f96332"
                        });
                        console.log(res.data);
                      } else {
                        console.log(res);
                        const id = res.data[0]['_id'];
                        const name = res.data[0]['name'];
                        saveToLocal('name', name)
                        saveToLocal('id', id);
                        window.location.href = "/dashboard";
                      }
                    });
                }else{
                  swal.fire({
                        title: "Incorrect info",
                        text: "Please enter all the fields",
                        icon: "error",
                        confirmButtonText: "Got It!",
                        confirmButtonColor: "#f96332"
                    });
                }
              }}><b>Log In</b></Button>
                <Button className='btn col-5 mx-auto mb-5 mt-2' href='/signup' style={{ backgroundColor: '#44bd32', border: '2px solid #44bd32' }}><b>Sign Up</b></Button>
        </Card>
    </section>
      );
    }}
  </Formik>
);

export default Login;