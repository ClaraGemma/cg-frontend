import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api.js";

import {
  Body,
  StyledForm,
  RegisterFormGroup,
  StyledField,
  StyledMdEmail,
  StyledFaUser,
  StyledFaLock,
  Button,
  StyledErrorMessage,
} from "./styles.js";

function Register() {
  const navigate = useNavigate();

  const handleClickRegister = async (values) => {
    try {
      const response = await api.post("/register", values);

      localStorage.setItem("token", response.data.token);

      navigate("/login");
    } catch (error) {
      alert("Falha no Registro: Credenciais inválidas");
      console.error("Erro de registro:", error);
    }
  };

  const validationLogin = yup.object().shape({
    name: yup.string().required("Este campo é obrigatório!"),
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
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleClickRegister}
          validationSchema={validationLogin}
        >
          <StyledForm>
            <h1>Registrar</h1>
            <p>Registre-se para ter acesso aos nossos serviços!</p>
            <RegisterFormGroup>
              <StyledField name="name" type="text" placeholder="Nome" />
              <StyledFaUser />

              <StyledErrorMessage component="span" name="name" />
            </RegisterFormGroup>

            <RegisterFormGroup>
              <StyledField name="email" type="text" placeholder="E-mail" />
              <StyledMdEmail />

              <StyledErrorMessage component="span" name="email" />
            </RegisterFormGroup>

            <RegisterFormGroup>
              <StyledField
                name="password"
                type="password"
                placeholder="Crie uma senha"
              />
              <StyledFaLock />

              <StyledErrorMessage component="span" name="password" />
            </RegisterFormGroup>

            <Button type="submit">Registrar-se</Button>

            <p className="login-link">
              Já possui uma conta?{" "}
              <Link className="login" to="/login">
                Entre aqui!
              </Link>
            </p>
          </StyledForm>
        </Formik>
      </div>
    </Body>
  );
}

export default Register;
