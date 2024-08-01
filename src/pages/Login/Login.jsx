import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";

import {
  Container,
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

      localStorage.setItem("token", response.data.token);

      navigate("/administrador");
    } catch (error) {
      alert("Falha no login: Credenciais inválidas");
      console.error("Erro de login:", error);
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
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <StyledForm>
          <h1>Admin Login</h1>
          <p>Use o email e senha disponibilizados.</p>
          <LoginFormGroup>
            <StyledField name="email" type="text" placeholder="E-mail" />
            <StyledFaUser />

            <StyledErrorMessage component="span" name="email" />
          </LoginFormGroup>

          <LoginFormGroup>
            <StyledField name="password" type="password" placeholder="Senha" />
            <StyledFaLock />

            <StyledErrorMessage component="span" name="password" />
          </LoginFormGroup>

          <Button type="submit">Entrar</Button>
        </StyledForm>
      </Formik>
    </Container>
  );
}

export default Login;
