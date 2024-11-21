import { useNavigate } from "react-router-dom";
import { Container, Message, Button } from "./styles"; // Importando os estilos

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const phoneNumber = "5513997862433"; // Insira o número com código do país e DDD
    const message = "Olá! Gostaria de continuar com o próximo passo.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <Container>
      <Message>
        Parabéns pela sua conquista! Agora, o próximo passo é falar conosco pelo
        WhatsApp.
      </Message>
      <Button onClick={handleWhatsAppContact}>Fale conosco!</Button>
    </Container>
  );
};

export default SuccessPage;
