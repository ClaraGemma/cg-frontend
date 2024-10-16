import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo_navbar.svg";
import ModalBase from "../../components/Modals/ModalBase/ModalBase.jsx";
import CreatePost from "../../components/Modals/CreatePost/CreatePost.jsx";
import PostItem from "../../components/PostItem/PostItem";
import CreateProduct from "../../components/Modals/CreateProduct/CreateProduct.jsx";
import ProductItem from "../../components/ProductItem/ProductItem";

import {
  Box,
  BoxPanel,
  Header,
  Button,
  Container,
  ContainerPanel,
  Logo,
  Nav,
  StyledIoAddCircle,
  StyledIoExit,
  ProductItemContainer,
} from "./styles.js";

function Administrator() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalPr, setOpenModalPr] = useState(false);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch("http://localhost:3000/api/check-admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (data.isAdmin) {
          setIsAdmin(true);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Erro ao verificar administrador:", error);
        navigate("/login");
      }
    };

    checkAdmin();
  }, [navigate]);

  // Função para buscar produtos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);

        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  if (!isAdmin) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Nav>
        <Box>
          <Logo>
            <img src={logo} alt="Logo" />
          </Logo>
          <h1>Área do Administrador</h1>
        </Box>
        <Box>
          <h1>Olá, Richard</h1>
          <StyledIoExit onClick={handleLogout} />
        </Box>
      </Nav>
      <ContainerPanel>
        <BoxPanel>
          <Header>
            <h1>Painel de Notícias</h1>
            <Button onClick={() => setOpenModal(true)}>
              <p>Nova Postagem</p>
              <StyledIoAddCircle />
            </Button>
            <ModalBase
              isOpen={openModal}
              setOpenModal={() => setOpenModal(!openModal)}
            >
              <CreatePost />
            </ModalBase>
          </Header>
          <PostItem />
        </BoxPanel>

        <BoxPanel>
          <Header>
            <h1>Painel de Produtos</h1>
            <Button onClick={() => setOpenModalPr(true)}>
              <p>Novo Produto</p>
              <StyledIoAddCircle />
            </Button>
            <ModalBase
              isOpen={openModalPr}
              setOpenModal={() => setOpenModalPr(!openModalPr)}
            >
              <CreateProduct />
            </ModalBase>
          </Header>
          <ProductItemContainer>
            <ProductItem
              products={products}
              showAddToCart={false}
              showDeleteButton={true}
            />
          </ProductItemContainer>
        </BoxPanel>
      </ContainerPanel>
    </Container>
  );
}

export default Administrator;
