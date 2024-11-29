import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Header,
  OrderItem,
  OrderItemEmpty,
  CopyMessage,
  WhatsAppButton,
} from "./styles";
import { FiCopy } from "react-icons/fi"; // Ícone de cópia

const OrdersUser = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copyMessage, setCopyMessage] = useState(""); // Estado para a mensagem de cópia
  const messageRef = useRef(null); // Referência para o elemento da mensagem

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token de autenticação não encontrado.");
          return;
        }
        const response = await fetch("http://localhost:3000/orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError("Erro ao carregar os pedidos.");
        console.error("Erro:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleCopyProtocol = (protocol, event) => {
    navigator.clipboard.writeText(protocol);
    setCopyMessage("Protocolo copiado!"); // Define a mensagem
    const messageElement = messageRef.current;

    if (messageElement) {
      messageElement.style.left = `${event.pageX + 10}px`; // Posição X do cursor
      messageElement.style.top = `${event.pageY}px`; // Posição Y do cursor
      messageElement.style.opacity = 1; // Exibe a mensagem
    }

    setTimeout(() => {
      if (messageElement) {
        messageElement.style.opacity = 0; // Esconde após 2 segundos
      }
    }, 2000);
  };

  if (loading) {
    return <div>Carregando pedidos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <h1>Meus Pedidos</h1>
          <p className="description">Acompanhe aqui todos os seus pedidos.</p>
        </Header>
        <div className="main-content">
          <div className="order-items">
            {orders.length > 0 ? (
              orders.map((order) => (
                <OrderItem key={order.id}>
                  <div className="item-top">
                    <h2>
                      <Link to={`/order/${order.id}`} className="protocol-link">
                        Protocolo: {order.protocol}{" "}
                        <CopyMessage ref={messageRef}>
                          {copyMessage}
                        </CopyMessage>
                      </Link>
                      <FiCopy
                        className="copy-icon"
                        onClick={(e) => handleCopyProtocol(order.protocol, e)}
                      />
                    </h2>
                    <div className="right-info">
                      <p className="status">{order.status}</p>
                      <p>
                        Data: {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {order.orderItems.map((item) => (
                    <div className="item-details" key={item.id}>
                      <div className="item-name">
                        <p className="name">{item.title}</p>
                        <div className="right-info">
                          <p>Cor: {item.color}</p>
                          <p>Tam.: {item.size}</p>
                          <p>Qtd.: {item.quantity}</p>
                          <p>Unidade: R${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <p className="subtotal">
                        Subtotal: R${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="hr"></div>
                    </div>
                  ))}

                  <div className="total-container">
                    <WhatsAppButton
                      href="https://api.whatsapp.com/send?phone=5513997862433&text=Ol%C3%A1%2C%20quero%20acompanhar%20meu%20pedido!"
                      target="_blank"
                    >
                      Acompanhar no WhatsApp
                    </WhatsAppButton>
                    <div className="total">
                      Total: R$
                      {order.orderItems
                        .reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </div>
                  </div>
                </OrderItem>
              ))
            ) : (
              <OrderItemEmpty>
                <div className="empty-cart">
                  <p>Você não tem pedidos.</p>
                </div>
              </OrderItemEmpty>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OrdersUser;
