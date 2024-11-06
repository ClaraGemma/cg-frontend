import styled from "styled-components";

// Estilos para a página de sucesso
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
`;

export const Message = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-family: "Livvic", sans-serif;
  font-size: 1.2rem;
  padding: 10px 20px;
  background-color: #f66f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ae4f00;
  }

  &:focus {
    outline: none;
  }
`;
