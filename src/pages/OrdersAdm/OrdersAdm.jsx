import { useEffect, useState } from "react";
import NavbarAdm from "../../components/NavbarAdm/NavbarAdm";
import {
  Container,
  OrderItem,
  TitlePanel,
  StatusDropdown,
  SearchInput,
} from "./styles";

const OrderAdm = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para o filtro de protocolo

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/orders/search?protocol=${searchQuery}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
        setError("Erro ao carregar os pedidos.");
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [searchQuery]); // Recarregar pedidos sempre que a consulta mudar

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/orders/${orderId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } else {
        console.error("Erro ao atualizar o status do pedido.");
      }
    } catch (err) {
      console.error("Erro ao atualizar o status do pedido:", err);
    }
  };

  if (loading) {
    return <div>Carregando pedidos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <NavbarAdm />
      <Container>
        <TitlePanel>Pedidos</TitlePanel>

        {/* Barra de pesquisa centralizada */}
        <SearchInput
          type="text"
          placeholder="Pesquisar por protocolo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado da consulta
        />

        {orders.length === 0 ? (
          <p>Nenhum pedido encontrado ou erro ao carregar.</p>
        ) : (
          orders.map((order) => (
            <OrderItem key={order.id}>
              <div className="item-top">
                <h2>Protocolo: {order.protocol}</h2>
                <div className="right-info">
                  <p className="status">{order.status}</p>
                  <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="total">
                <StatusDropdown
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Em produção">Em produção</option>
                  <option value="Enviado">Enviado</option>
                  <option value="Concluído">Concluído</option>
                </StatusDropdown>
                <strong>
                  Total: R$
                  {order.totalPrice.toFixed(2)}
                </strong>
              </div>
            </OrderItem>
          ))
        )}
      </Container>
    </>
  );
};

export default OrderAdm;
