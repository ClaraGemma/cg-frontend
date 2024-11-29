import { IoAddCircle } from "react-icons/io5";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3% 0;
  margin-bottom: 20px;
`;

export const TitlePanel = styled.h1`
  font-family: "Livvic", sans-serif;
  font-size: 28px; /* Aumentado para melhor legibilidade */
  font-weight: 700; /* Deixando o título mais forte */
  color: #333; /* Cor mais escura para contraste */
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #f05454;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  font-family: "Livvic", sans-serif;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave para destaque */

  &:hover {
    background-color: #ff3333;
  }

  p {
    margin-right: 10px;
    font-size: 16px; /* Aumentado o tamanho da fonte para visibilidade */
  }
`;

export const StyledIoAddCircle = styled(IoAddCircle)`
  font-size: 24px;
`;
