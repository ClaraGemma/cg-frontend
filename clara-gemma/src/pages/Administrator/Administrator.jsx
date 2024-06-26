import {
  Box,
  BoxPanel,
  Button,
  Container,
  Logo,
  Nav,
  StyledIoAddCircle,
  StyledIoExit,
} from "./styles.js";
import logo from "../../assets/logo_navbar.svg";
import Modal from "../../components/Modal/Modal.jsx";
import { useState } from "react";

function Administrator() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalPr, setOpenModalPr] = useState(false);

  return (
    <Container>
      <Nav>
        <Box>
          <Logo>
            <img src={logo} />
          </Logo>
          <h1>Área do Administrador</h1>
        </Box>
        <Box>
          <h1>Olá, Richard</h1>
          <StyledIoExit />
        </Box>
      </Nav>

      <BoxPanel>
        <h1>Painel de Notícias</h1>
        <Button onClick={() => setOpenModal(true)}>
          <p>Nova Postagem</p>
          <StyledIoAddCircle />
        </Button>
        <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)}>
          <p>eu sou post</p>
        </Modal>
      </BoxPanel>

      <BoxPanel>
        <h1>Painel de Produtos</h1>
        <Button onClick={() => setOpenModalPr(true)}>
          <p>Novo Produto</p>
          <StyledIoAddCircle />
        </Button>
        <Modal
          isOpen={openModalPr}
          setOpenModalPr={() => setOpenModalPr(!openModalPr)}
        >
          <p>eu sou produto</p>
        </Modal>
      </BoxPanel>
    </Container>
  );
}

export default Administrator;
