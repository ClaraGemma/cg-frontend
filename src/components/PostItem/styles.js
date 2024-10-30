import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const Container = styled.div`
  background-color: var(--primary-background-color);
  margin: 2em 0;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Adicione uma sombra para destaque
  display: flex; // Para usar flexbox se necessário
  flex-direction: column; // Alinha os itens em coluna
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;

  h1 {
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    letter-spacing: 3px;
  }
`;

export const TrashDateBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFaTrash = styled(FaTrash)`
  width: 17px;
  height: 17px;
  margin-right: 1em;
  color: var(--exit-color);
  cursor: pointer;

  &: hover {
    opacity: 0.7;
  }
`;

export const Description = styled.div`
  margin-bottom: 2em;
  text-align: justify;
  color: var(--primary-text-color);
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 17px;
`;

export const Image = styled.img`
  width: 100%; // Ajusta a largura para ocupar 100% do contêiner
  height: auto; // Mantém a proporção da imagem
`;
