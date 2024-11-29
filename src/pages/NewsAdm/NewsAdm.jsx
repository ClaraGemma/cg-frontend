import { useState } from "react";
import CreatePost from "../../components/Modals/CreatePost/CreatePost";
import NavbarAdm from "../../components/NavbarAdm/NavbarAdm";
import ModalBase from "../../components/Modals/ModalBase/ModalBase";
import PostItem from "../../components/PostItem/PostItem";
import {
  Container,
  Header,
  TitlePanel,
  Button,
  StyledIoAddCircle,
} from "./styles";

function NewsAdm() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <NavbarAdm />
      <Container>
        <Header>
          <TitlePanel>Painel de Notícias</TitlePanel>
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
      </Container>
    </>
  );
}

export default NewsAdm;
