import { useNavigate } from "react-router-dom";
import { Container, Message, Paragraph, ButtonGroup, Button } from "./styles";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const phoneNumber = "5513997862433"; // Número do WhatsApp com código do país
    const message = "Olá! Gostaria de acompanhar o status do meu pedido.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
  };

  const handleViewOrders = () => {
    navigate("/meuspedidos"); // Navega para a página de pedidos
  };

  return (
    <Container>
      <Message>
        Obrigado por confiar em nossa loja! Seu pedido foi recebido com sucesso!
      </Message>
      <Paragraph>
        Acompanhe o status do seu pedido diretamente pelo WhatsApp! Estamos
        prontos para ajudá-lo com qualquer dúvida ou necessidade adicional.
        Fique tranquilo, você está em boas mãos.
      </Paragraph>

      <ButtonGroup>
        <Button onClick={handleViewOrders}>Ver meus pedidos</Button>
        <Button onClick={handleWhatsAppContact}>Acompanhar no WhatsApp</Button>
      </ButtonGroup>
    </Container>
  );
};

export default SuccessPage;
