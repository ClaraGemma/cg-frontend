import { useState, useEffect } from "react";
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

  const handleRemoveItem = async (itemId) => {
    try {
      await fetch(`http://localhost:3000/cart/remove/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Erro ao remover item do carrinho:", error);
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // const calculateTotal = () => {
  //   return cartItems
  //     .reduce((total, item) => total + item.product.price * item.quantity, 0)
  //     .toFixed(2);
  // };

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
                    <p>Quantidade: {item.quantity}</p>
                  </div>
                </>
              )}
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
            </CartItem>
          ))}
        </CartItemContainer>
        {cartItems.map((item) => (
          <CartFooter key={item.id}>
            <div className="total">
              <h2>Total</h2>
              <p>R$ {item.product.price.toFixed(2)}</p>
            </div>
            <button>Finalizar Compra</button>
          </CartFooter>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCart;
