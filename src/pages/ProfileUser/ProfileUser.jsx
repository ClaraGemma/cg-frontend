import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Supondo que você armazena o token no localStorage
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar dados do usuário");
      }

      const data = await response.json();
      setFormData({
        ...formData,
        name: data.name,
        email: data.email,
      });
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/user/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.message);
    } else {
      setIsModalOpen(false);
      alert("Informações atualizadas com sucesso!");
    }
  };

  return (
    <>
      <Navbar />
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
            <Value>********</Value> {/* Não exibir senha real por segurança */}
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
                <Label>Senha atual:</Label>
                <Input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                />
                <Label>Nova senha:</Label>
                <Input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
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
