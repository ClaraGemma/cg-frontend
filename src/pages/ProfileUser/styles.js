import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  align-items: center;
  background-color: #f5f5f5;
`;

export const ProfileBox = styled.div`
  background-color: #fff;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
  height: 300px;
  text-align: center;
`;

export const ProfileInfo = styled.div`
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-weight: 600; // Usar peso 600 para Livvic
  font-size: 18px;
  font-family: "Livvic", sans-serif; // Aplica Livvic ao título
`;

export const Value = styled.p`
  font-size: 16px;
  margin-top: 0.5em;
  font-family: "Poppins", sans-serif; // Aplica Livvic ao título
  color: #555;
`;

export const EditButton = styled.button`
  background-color: #f66f00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Livvic", sans-serif; // Aplica Livvic ao botão
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ae4f00;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 10px;
  width: 300px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Livvic", sans-serif; // Aplica Livvic ao botão

  &:hover {
    background-color: #218838;
  }
`;
