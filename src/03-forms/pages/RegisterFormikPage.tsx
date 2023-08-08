import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Requerido")
            .min(2, "Debe tener más de 2 caracteres")
            .max(15, "Debe tener 15 caracteres o menos"),
          email: Yup.string()
            .required("Requerido")
            .email("Debe tener un formato correcto"),
          password1: Yup.string()
            .required("requerido")
            .min(6, "Debe tener más de 6 caracteres"),
          password2: Yup.string()
            .required("requerido")
            .oneOf([Yup.ref("password1")], "Las contraseñas no coinciden"),
        })}
      >
        {({ resetForm }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" />
            <MyTextInput type="email" label="Correo" name="email" />
            <MyTextInput type="password" label="Contraseña" name="password1" />
            <MyTextInput
              type="password"
              label="Repita Contraseña"
              name="password2"
            />
            <button type="submit">Create</button>
            <button onClick={() => resetForm()}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
