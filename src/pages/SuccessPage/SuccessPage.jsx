import { useNavigate } from "react-router-dom";
import { Container, Message, Button } from "./styles"; // Importando os estilos

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <Container>
      <Message>Compra realizada com sucesso! Parabéns!</Message>
      <Button onClick={handleGoHome}>Voltar para Home</Button>
    </Container>
  );
};

export default SuccessPage;
