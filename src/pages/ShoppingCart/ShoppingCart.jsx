import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Header,
  ReviewItem,
  ReviewItemEmpty,
  Dropdown,
  DeleteButton,
  ModalOverlay,
  ModalContent,
  ModalButton,
} from "./styles";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCancelModal, setShowCancelModal] = useState(false);
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

  const handleOptionChange = (index, option, value) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = {
      ...updatedCartItems[index],
      [option]: value,
    };
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = (item) => {
    const price = item.product?.sizes?.find(
      (size) => size.size === item.size
    )?.price;

    return (price || 0) * (item.quantity || 0);
  };

  const calculateSummary = () => {
    const totalItems = cartItems.reduce(
      (sum, item) => sum + (item.quantity || 0),
      0
    );

    const totalPrice = cartItems.reduce(
      (sum, item) => sum + calculateTotalPrice(item),
      0
    );

    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = calculateSummary();

  const handleAddressStep = () => {
    navigate("/endereco", { state: { cartItems, totalItems, totalPrice } });
  };

  const handleCancelOrder = () => {
    setShowCancelModal(true);
  };

  const handleConfirmCancel = async () => {
    setShowCancelModal(false);
    await fetch("http://localhost:3000/cart/clear", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setCartItems([]);
    navigate("/");
  };

  const handleCloseModal = () => {
    setShowCancelModal(false);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <h1>Meu Carrinho</h1>
          <p className="description">
            Revise seu pedido antes de prosseguir para a próxima etapa.
          </p>
        </Header>
        <div className="main-content">
          <div className="review-items">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ReviewItem key={index}>
                  {item.product && (
                    <>
                      <img
                        src={
                          item.product?.colors?.find(
                            (color) => color.color === item.color
                          )?.image_url
                            ? `http://localhost:3000${
                                item.product.colors.find(
                                  (color) => color.color === item.color
                                )?.image_url
                              }`
                            : "caminho_para_imagem_padrao"
                        }
                        alt={item.product?.title || "Produto sem título"}
                        width="100"
                      />
                      <div className="item-details">
                        <h2>{item.product.title}</h2>
                        <div className="options">
                          <div>
                            <p>Cor:</p>
                            <Dropdown>
                              <select
                                value={item.color || ""}
                                onChange={(e) =>
                                  handleOptionChange(
                                    index,
                                    "color",
                                    e.target.value
                                  )
                                }
                              >
                                {item.product?.colors?.map((color) => (
                                  <option key={color.color} value={color.color}>
                                    {color.color}
                                  </option>
                                )) || (
                                  <option value="">Cor indisponível</option>
                                )}
                              </select>
                            </Dropdown>
                          </div>
                          <div>
                            <p>Tamanho:</p>
                            <Dropdown>
                              <select
                                value={item.size || ""}
                                onChange={(e) =>
                                  handleOptionChange(
                                    index,
                                    "size",
                                    e.target.value
                                  )
                                }
                              >
                                {item.product?.sizes?.map((size) => (
                                  <option key={size.size} value={size.size}>
                                    {size.size}
                                  </option>
                                )) || (
                                  <option value="">Tamanho indisponível</option>
                                )}
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
                                    parseInt(e.target.value, 10)
                                  )
                                }
                              >
                                {Array.from(
                                  { length: 10 },
                                  (_, i) => i + 1
                                ).map((value) => (
                                  <option key={value} value={value}>
                                    {value}
                                  </option>
                                ))}
                              </select>
                            </Dropdown>
                          </div>
                        </div>
                        <p className="price">
                          R$ {calculateTotalPrice(item).toFixed(2)}
                        </p>
                      </div>
                      <div className="actions">
                        <DeleteButton onClick={() => handleRemoveItem(item.id)}>
                          Excluir
                        </DeleteButton>
                      </div>
                    </>
                  )}
                </ReviewItem>
              ))
            ) : (
              <ReviewItemEmpty>
                <div className="empty-cart">
                  <p>Adicione produtos em nosso catálogo!</p>
                  <button onClick={() => navigate("/produtos")}>
                    Ir ao Catálogo
                  </button>
                </div>
              </ReviewItemEmpty>
            )}
          </div>
          <div className="order-actions">
            {cartItems.length > 0 ? (
              <>
                <h2>Resumo do Pedido</h2>
                <p>Produtos ({totalItems})</p>
                <div className="frete-line">
                  <p>Frete:</p>
                  <strong>
                    {totalPrice >= 150
                      ? "Frete Grátis"
                      : `R$ ${(totalPrice * 0.1).toFixed(2)}`}
                  </strong>
                </div>
                <div className="total-line">
                  <p>Total:</p>
                  <strong>R$ {totalPrice.toFixed(2)}</strong>
                </div>
                <button onClick={handleAddressStep}>Prosseguir</button>
                <button className="cancel-button" onClick={handleCancelOrder}>
                  Cancelar Pedido
                </button>
              </>
            ) : (
              <>
                <h2>Resumo da Compra</h2>
                <p>
                  Aqui, você encontrará os valores da sua compra assim que
                  adicionar produtos.
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
      <Footer />

      {showCancelModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>Tem certeza que deseja cancelar o pedido?</h3>
            <div className="modal-actions">
              <ModalButton onClick={handleConfirmCancel} className="confirm">
                Sim, tenho
              </ModalButton>
              <ModalButton onClick={handleCloseModal} className="cancel">
                Não, vou continuar
              </ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ShoppingCart;
