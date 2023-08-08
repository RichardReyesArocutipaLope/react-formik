import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../assets/react.svg";
import {
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <NavLink
                to="/formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikYupPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FormikComponents"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikComponents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FormikAbstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikAbstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="formik" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="FormikComponents" element={<FormikComponents />} />
          <Route path="FormikAbstraction" element={<FormikAbstraction />} />
          <Route path="/*" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
