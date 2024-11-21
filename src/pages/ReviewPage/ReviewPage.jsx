import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import {
  Container,
  Header,
  ReviewItem,
  ReviewFooter,
  Dropdown,
  DeleteButton,
} from "./styles";

const ReviewPage = () => {
  const { state } = useLocation();
  const [cartItems, setCartItems] = useState(state ? state.cartItems : []);
  const navigate = useNavigate();

  const handleOptionChange = (index, option, value) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = {
      ...updatedCartItems[index],
      [option]: value,
    };
    setCartItems(updatedCartItems);
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const handleConfirmOrder = async () => {
    try {
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
          <h1>Revisão do Pedido</h1>
          <p className="description">
            Revise seu pedido antes de concluir a compra dos seus produtos.
            Verifique as opções de cor, tamanho e quantidade de cada item, e
            ajuste conforme necessário.
          </p>
        </Header>
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ReviewItem key={index}>
                {item.product && (
                  <>
                    <img
                      src={`http://localhost:3000${item.product.image_url}`}
                      alt={item.product.title}
                    />
                    <div className="item-details">
                      <h2>{item.product.title}</h2>
                      <p>{item.product.description}</p>
                      <div className="options">
                        <div>
                          <p>Cor:</p>
                          <Dropdown>
                            <select
                              value={item.color || "Não especificada"}
                              onChange={(e) =>
                                handleOptionChange(
                                  index,
                                  "color",
                                  e.target.value
                                )
                              }
                            >
                              <option value="Azul">Azul</option>
                              <option value="Branco">Branco</option>
                              <option value="Preto">Preto</option>
                              <option value="Vermelho">Vermelho</option>
                              <option value="Verde">Verde</option>
                            </select>
                          </Dropdown>
                        </div>
                        <div>
                          <p>Tamanho:</p>
                          <Dropdown>
                            <select
                              value={item.size || "Não especificado"}
                              onChange={(e) =>
                                handleOptionChange(
                                  index,
                                  "size",
                                  e.target.value
                                )
                              }
                            >
                              <option value="5cm">5cm</option>
                              <option value="7cm">7cm</option>
                              <option value="10cm">10cm</option>
                              <option value="15cm">15cm</option>
                              <option value="20cm">20cm</option>
                            </select>
                          </Dropdown>
                        </div>
                        <div>
                          <p>Quantidade:</p>
                          <Dropdown>
                            <select
                              value={item.quantity || 1}
                              onChange={(e) =>
                                handleOptionChange(
                                  index,
                                  "quantity",
                                  e.target.value
                                )
                              }
                            >
                              {[...Array(10).keys()].map((i) => (
                                <option key={i} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </Dropdown>
                        </div>
                      </div>
                      <p className="price">
                        Valor: R${" "}
                        {calculateTotalPrice(item.product.price, item.quantity)}
                      </p>
                    </div>
                    <div className="actions">
                      <DeleteButton onClick={() => handleDeleteItem(index)}>
                        Deletar
                      </DeleteButton>
                    </div>
                  </>
                )}
              </ReviewItem>
            ))
          ) : (
            <p>Não há itens no carrinho.</p>
          )}
        </div>
        <ReviewFooter>
          <button onClick={handleConfirmOrder}>Confirmar Pedido</button>
        </ReviewFooter>
      </Container>
      <Footer />
    </>
  );
};

export default ReviewPage;
