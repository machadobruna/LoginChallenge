import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { InputField } from "components/TextField";
import { InputAnotherField } from "components/TextField";
import 'assets/rectangle.css';
import 'assets/rectangleuser.css';
import logo_chimu from 'assets/logo_chimu.png';
import { ButtonLogin } from "components/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Validar = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({

      username: yup
        .string()
        .email("E-mail inválido.")
        .required("O campo é obrigatório."),
      password: yup
        .string()
        .required("O campo é obrigatório."),
    }),
    onSubmit: (values) => {
      localStorage.setIem("username", JSON.stringify(values));
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (

    
    <form onSubmit={formik.handleSubmit} className="formclasse">
      <Card sx={{ mx: 'auto', marginTop: 25, minWidth: 275, display: 'flex', width: 474, height: 599, px: 3, py: 2, top: 232, left: 723 }}>
        <CardContent sx={{ mx: 'auto' }} >
          <img src={logo_chimu} alt="logo" className="logo" />
          <label htmlFor="email">
            Username or E-mail
          </label>
             <InputField class="userrectangle" label="Username or E-mail" placeholder="nome@email.com"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <label htmlFor="password">Password</label>
            <InputAnotherField label="Password" placeholder="topsecret"
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <ButtonLogin type="submit" sx={{ width: 165 }} variant="contained" color="primary" >
              Log In
            </ButtonLogin>
          
        </CardContent>
      </Card>

    </form>

  );
};


const Login = () => {
  return (
    <>
      <Validar />
    </>
  )
}

export default Login;