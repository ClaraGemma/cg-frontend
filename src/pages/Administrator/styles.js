import styled from "styled-components";
import { IoExit, IoAddCircle } from "react-icons/io5";

export const Container = styled.div`
  background-color: #222;
  min-height: 100vh;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  border-bottom: 1px solid var(--primary-background-color);
`;

export const Box = styled.div`
  align-items: center;
  display: flex;

  h1 {
    padding: 0 30px;
    color: var(--second-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 23px;
  }
`;

export const ContainerPanel = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-direction: column; /* Para garantir que os elementos sejam empilhados */
`;

export const Logo = styled.li`
  list-style: none;
`;

export const StyledIoExit = styled(IoExit)`
  font-size: 25px;
  color: var(--exit-color);
`;

export const BoxPanel = styled.div`
  background-color: var(--second-background-color);
  width: 75%;
  // padding: 1em 2em;
  // margin: 1rem 5rem 0 5rem;
  border-radius: 5px;
  max-height: 500px; // Define a altura máxima
  overflow-y: auto; // Ativa a barra de rolagem quando necessário
  padding: 1em;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 23px;
    font-weight: 500;
    color: var(--second-text-color);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: var(--second-text-color);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--second-text-color);
    color: var(--primary-text-color);
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-right: 10px;
    letter-spacing: 1.5px;
  }
`;

export const StyledIoAddCircle = styled(IoAddCircle)`
  font-size: 23px;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se movam para a linha seguinte */
  gap: 20px; /* Espaçamento entre os itens */
  justify-content: center; /* Centraliza horizontalmente */
`;
