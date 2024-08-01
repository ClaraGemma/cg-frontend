import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { useState } from "react";
import logo from "../../assets/logo_navbar.svg";
import ModalBase from "../../components/Modals/ModalBase/ModalBase.jsx";
import CreatePost from "../../components/Modals/CreatePost/CreatePost.jsx";
import CreateProduct from "../../components/Modals/CreateProduct/CreateProduct.jsx";
import PostItem from "../../components/PostItem/PostItem";

import {
  Box,
  BoxPanel,
  Header,
  Button,
  Container,
  Logo,
  Nav,
  StyledIoAddCircle,
  StyledIoExit,
} from "./styles.js";

function Administrator() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalPr, setOpenModalPr] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

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
            setOpenModalPr={() => setOpenModalPr(!openModalPr)}
          >
            <CreateProduct />
          </ModalBase>
        </Header>
      </BoxPanel>
    </Container>
  );
}

export default Administrator;
