import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  OrderContainer,
  Title,
  OrderInfo,
  ItemsContainer,
  Item,
  TotalPrice,
  ErrorMessage,
  LoadingMessage,
  WhatsAppButton,
} from "./styles";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token de autenticação não encontrado.");
          return;
        }

        const response = await fetch(`http://localhost:3000/order/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar os detalhes do pedido.");
        }

        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetail();
  }, [id]);

  if (loading) {
    return <LoadingMessage>Carregando detalhes do pedido...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!order) {
    return <ErrorMessage>Pedido não encontrado.</ErrorMessage>;
  }

  return (
    <>
      <Navbar />
      <OrderContainer>
        <Title>Detalhes do Pedido</Title>
        <OrderInfo>
          <h2>Protocolo: {order.protocol}</h2>
          <p>Data: {new Date(order.createdAt).toLocaleDateString()}</p>
          <p>Status: {order.status}</p>
        </OrderInfo>
        <h2>Itens do Pedido:</h2>
        <ItemsContainer>
          {order.orderItems.map((item) => (
            <Item key={item.id}>
              <p>
                <strong>Produto:</strong> {item.title}
              </p>
              <p>
                <strong>Quantidade:</strong> {item.quantity}
              </p>
              <p>
                <strong>Cor:</strong> {item.color}
              </p>
              <p>
                <strong>Tamanho:</strong> {item.size}
              </p>
              <p>
                <strong>Preço Unitário:</strong> R${item.price.toFixed(2)}
              </p>
              <p>
                <strong>Subtotal:</strong> R${item.totalPrice.toFixed(2)}
              </p>
            </Item>
          ))}
        </ItemsContainer>
        <TotalPrice>
          <WhatsAppButton
            href={`https://api.whatsapp.com/send?phone=5513997862433&text=Ol%C3%A1%2C%20quero%20acompanhar%20meu%20pedido!`}
            target="_blank"
          >
            Acompanhar no WhatsApp
          </WhatsAppButton>
          <strong>Total: R$ {order.totalPrice.toFixed(2)}</strong>
        </TotalPrice>
      </OrderContainer>
      <Footer />
    </>
  );
};

export default OrderDetail;
