import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("requerido"),
          email: Yup.string()
            .email("Debe tener un formato correcto")
            .required("requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string().required("Rquerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First name" name="firstName" />
            <MyTextInput label="Last Name" name="lastName" />
            <MyTextInput label="Email Address" name="email" type="email" />
            <MySelect label="job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
            </MySelect>
            <MyCheckbox label="terms Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
