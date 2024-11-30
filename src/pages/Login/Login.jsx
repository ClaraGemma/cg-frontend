import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api.js";

import {
  Body,
  StyledForm,
  LoginFormGroup,
  StyledField,
  StyledFaUser,
  StyledFaLock,
  Button,
  StyledErrorMessage,
} from "./styles.js";

function Login() {
  const navigate = useNavigate();

  const handleClickLogin = async (values) => {
    try {
      const response = await api.post("/login", values);
      const { token, role, name } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userName", name);

      if (role === "admin") {
        navigate("/admin");
      } else if (role === "user") {
        navigate("/home");
      }
    } catch (error) {
      alert("Falha no login: Credenciais inválidas");
    }
  };

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email")
      .required("Este campo é obrigatório!"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres!")
      .required("Este campo é obrigatório!"),
  });

  return (
    <Body>
      <div className="form-container">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
        >
          <StyledForm>
            <h1>Login</h1>
            <p>Entre com sua conta abaixo</p>
            <LoginFormGroup>
              <StyledField name="email" type="text" placeholder="E-mail" />
              <StyledFaUser />
              <StyledErrorMessage component="span" name="email" />
            </LoginFormGroup>

            <LoginFormGroup>
              <StyledField
                name="password"
                type="password"
                placeholder="Senha"
              />
              <StyledFaLock />
              <StyledErrorMessage component="span" name="password" />
            </LoginFormGroup>

            <Button type="submit">Entrar</Button>

            <p className="register-link">
              Não possui uma conta?{" "}
              <Link className="register" to="/registrar">
                Registre-se aqui!
              </Link>
            </p>
          </StyledForm>
        </Formik>
      </div>
    </Body>
  );
}

export default Login;
