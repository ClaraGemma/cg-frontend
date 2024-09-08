import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";

import {
  Container,
  ProfileBox,
  ProfileInfo,
  Label,
  Value,
  EditButton,
  ModalContainer,
  ModalContent,
  CloseButton,
  Form,
  Input,
  SubmitButton,
} from "./styles";

function ProfileUser() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "Nome do Usuário",
    email: "usuario@email.com",
    password: "********",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Função para atualizar os dados
    setIsModalOpen(false);
  };

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />

      <Container>
        <ProfileBox>
          <ProfileInfo>
            <Label>Nome:</Label>
            <Value>{formData.name}</Value>
          </ProfileInfo>
          <ProfileInfo>
            <Label>Email:</Label>
            <Value>{formData.email}</Value>
          </ProfileInfo>
          <ProfileInfo>
            <Label>Senha:</Label>
            <Value>{formData.password}</Value>
          </ProfileInfo>
          <EditButton onClick={handleEditClick}>Editar informações</EditButton>
        </ProfileBox>

        {isModalOpen && (
          <ModalContainer>
            <ModalContent>
              <CloseButton onClick={handleCloseModal}>X</CloseButton>
              <Form onSubmit={handleSubmit}>
                <Label>Nome:</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Label>Senha:</Label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <SubmitButton type="submit">Salvar</SubmitButton>
              </Form>
            </ModalContent>
          </ModalContainer>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default ProfileUser;
