import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        setCartItems(cartItems.filter((item) => item.id !== productId));
      } else {
        const data = await response.json();
        console.error("Erro:", data.message);
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      navigate("/review", { state: { cartItems } });
    } catch (error) {
      console.error("Erro ao prosseguir com o pedido:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.product.price || 0) * item.quantity,
      0
    );
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
                    <p className="description">{item.product.desc}</p>
                    <p className="price">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    Valor aplicado à {item.quantity} produto(s).
                  </div>
                </>
              )}
              <button onClick={() => handleRemoveItem(item.id)}>Deletar</button>
            </CartItem>
          ))}
        </CartItemContainer>
        <CartFooter>
          <div className="total">
            <h2>Total</h2>
            <p>R$ {calculateTotal().toFixed(2)}</p>
          </div>
          <button onClick={handleCheckout}>Prosseguir</button>
        </CartFooter>
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCart;
