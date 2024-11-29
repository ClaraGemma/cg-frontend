import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Header,
  StyledForm,
  AddressContainer,
  Label,
  StyledField,
  ErrorText,
  Button,
  ModalOverlay,
  ModalContent,
  ModalButton,
} from "./styles";

const AddressForm = () => {
  const { state } = useLocation();
  const {
    cartItems: cartItemsFromState,
    totalItems = 0,
    totalPrice = 0,
  } = state || {};
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState(cartItemsFromState || []);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    cep: yup
      .string()
      .required("CEP é obrigatório!")
      .matches(
        /^\d{5}-\d{3}$/,
        "CEP inválido! Deve estar no formato 00000-000."
      ),
    address: yup
      .string()
      .required("Endereço é obrigatório!")
      .min(5, "O endereço deve ter pelo menos 5 caracteres."),
    city: yup
      .string()
      .required("Cidade é obrigatória!")
      .min(2, "O nome da cidade deve ter pelo menos 2 caracteres."),
    state: yup
      .string()
      .required("Estado é obrigatório!")
      .length(2, "O estado deve conter apenas a sigla com 2 letras."),
  });

  const handleCepChange = async (cep, setFieldValue) => {
    if (cep.length === 9) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cep.replace("-", "")}/json/`
        );
        const data = await response.json();

        if (data.erro) {
          console.error("CEP não encontrado!");
          setFieldValue("address", "");
          setFieldValue("city", "");
          setFieldValue("state", "");
        } else {
          setFieldValue("address", data.logradouro || "");
          setFieldValue("city", data.localidade || "");
          setFieldValue("state", data.uf || "");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      } finally {
        setLoading(false);
      }
    }
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

  const handleSubmit = async () => {
    const orderItems = cartItemsFromState.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      price: item.price,
      color: item.color, // Cor selecionada
      size: item.size, // Tamanho selecionado
      title: item.product.title, // Nome do produto
      totalPrice: item.price * item.quantity,
    }));

    const order = {
      orderItems,
      totalPrice,
    };

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        setCartItems([]);

        await fetch("http://localhost:3000/cart/clear", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        alert("Pedido concluído!");
        navigate("/success");
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erro ao realizar o pedido:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <h1>Adicionar Endereço</h1>
          <p className="description">
            Insira as informações do endereço para entrega do pedido.
          </p>
        </Header>
        <div className="main-content">
          <Formik
            initialValues={{
              cep: "",
              address: "",
              number: "",
              city: "",
              state: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Endereço salvo:", values);
            }}
          >
            {({ setFieldValue }) => (
              <StyledForm>
                <Label>
                  CEP:
                  <StyledField
                    name="cep"
                    type="text"
                    onChange={(e) => {
                      const cep = e.target.value;
                      setFieldValue("cep", cep);
                      if (cep.length === 9) {
                        handleCepChange(cep, setFieldValue);
                      }
                    }}
                  />
                  <ErrorMessage name="cep" component={ErrorText} />
                  {loading && <p>Buscando informações...</p>}
                </Label>

                <div className="address-container">
                  <AddressContainer>
                    <Label>
                      Endereço:
                      <StyledField name="address" type="text" />
                      <ErrorMessage name="address" component={ErrorText} />
                    </Label>

                    <Label>
                      Número:
                      <StyledField name="number" type="text" />
                      <ErrorMessage name="number" component={ErrorText} />
                    </Label>
                  </AddressContainer>
                </div>
                <Label>
                  Cidade:
                  <StyledField name="city" type="text" />
                  <ErrorMessage name="city" component={ErrorText} />
                </Label>
                <Label>
                  Estado:
                  <StyledField name="state" type="text" />
                  <ErrorMessage name="state" component={ErrorText} />
                </Label>

                <Button type="submit">Salvar Endereço</Button>
              </StyledForm>
            )}
          </Formik>

          <div className="order-actions">
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

            <button onClick={handleSubmit}>Finalizar Pedido</button>
            <button className="cancel-button" onClick={handleCancelOrder}>
              Cancelar Pedido
            </button>
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

export default AddressForm;
