// import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import {
  Container,
  Form,
  InputField,
  Input,
  StyledFaUser,
  StyledFaLock,
  ForgetPassword,
  Button,
} from "./styles.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username, password);
    console.log("Envio");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <p>Use o email e senha disponibilizados.</p>
        <InputField>
          <Input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledFaUser className="icon" />
        </InputField>
        <InputField>
          <Input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledFaLock className="icon" />
        </InputField>
        <ForgetPassword>
          <a href="#">Esqueceu a senha?</a>
        </ForgetPassword>

        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;
