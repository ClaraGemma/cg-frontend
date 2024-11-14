import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Header,
  CartItemContainer,
  CartItem,
  CartFooter,
} from "./styles";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Cria a instância do hook de navegação

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        setCartItems(data);
      } catch (error) {
        console.error("Erro ao buscar itens do carrinho:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/cart/remove/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        // Sucesso
        console.log("Item removido com sucesso");
        setCartItems(cartItems.filter((item) => item.id !== productId));
      } else {
        // Erro no servidor
        const data = await response.json();
        console.error("Erro:", data.message);
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      // Aqui pode ser feito o processo de pagamento ou envio dos dados para o backend
      // Após isso, redireciona para a página de sucesso
      await fetch("http://localhost:3000/cart/clear", {
        method: "DELETE", // Endpoint para limpar o carrinho
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Limpa o estado do carrinho
      setCartItems([]);

      // Redireciona para a página de sucesso
      navigate("/success");
    } catch (error) {
      console.error("Erro ao finalizar a compra:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <h1>Meu Carrinho</h1>
        </Header>
        <CartItemContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              {item.product && (
                <>
                  <img
                    src={`http://localhost:3000${item.product.image_url}`}
                    alt={item.product.title}
                  />
                  <div className="item-details">
                    <h2>{item.product.title}</h2>
                    <p>R$ {item.product.price.toFixed(2)}</p>
                    <p>Quantidade: 1</p>
                  </div>
                </>
              )}
              <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
            </CartItem>
          ))}
        </CartItemContainer>
        <CartFooter>
          <div className="total">
            <h2>Total</h2>
            <p>R$ 22.00</p>
          </div>
          <button onClick={handleCheckout}>Prosseguir</button>
        </CartFooter>
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCart;
