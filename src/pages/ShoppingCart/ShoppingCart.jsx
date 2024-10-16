import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Header,
  CartItemContainer,
  CartItem,
  CartFooter,
} from "./styles";

const ShoppingCart = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Função para buscar itens do carrinho do usuário
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Inclua o token aqui
          },
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data); // Para verificar a estrutura dos dados
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

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <Container>
        <Header>
          <h1>Meu Carrinho</h1>
        </Header>
        <CartItemContainer>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              {item.product && ( // Verifique se item.product existe
                <>
                  <img
                    src={`http://localhost:3000${item.product.image_url}`}
                    alt={item.product.title}
                  />
                  <div className="item-details">
                    <h2>{item.product.title}</h2>
                    <p>Preço: R$ {item.product.price}</p>
                    <p>Quantidade: {item.quantity}</p>
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
            <p>
              R${" "}
              {cartItems
                .reduce(
                  (total, item) => total + item.product.price * item.quantity,
                  0
                )
                .toFixed(2)}
            </p>
          </div>
          <button>Finalizar Compra</button>
        </CartFooter>
      </Container>
      <Footer />
    </>
  );
};

export default ShoppingCart;
