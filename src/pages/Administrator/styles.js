import styled from "styled-components";
import { IoExit, IoAddCircle } from "react-icons/io5";

export const Container = styled.div`
  background-color: #404040; /* Fundo atualizado */
  min-height: 100vh;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  border-bottom: 1px solid #666;
`;

export const Box = styled.div`
  align-items: center;
  display: flex;

  h1 {
    padding: 0 30px;
    color: #f0f0f0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 23px;
  }
`;

export const ContainerPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.li`
  list-style: none;
`;

export const StyledIoExit = styled(IoExit)`
  font-size: 25px;
  color: #f05454;
  cursor: pointer;

  &:hover {
    color: #ff3333;
  }
`;

export const BoxPanel = styled.div`
  background-color: #333;
  width: 75%;
  border-radius: 5px;
  padding: 1em;
  margin: 20px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Livvic", sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #f05454;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  font-family: "Livvic", sans-serif;

  &:hover {
    background-color: #ff3333;
  }

  p {
    margin-right: 8px;
    font-size: 14px;
  }
`;

export const StyledIoAddCircle = styled(IoAddCircle)`
  font-size: 20px;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center; /* Centraliza os itens */
  padding: 10px 0;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  background: ${(props) => (props.$active ? "#f66f00" : "#fff")};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#fff" : "#f66f00")};

  &:hover {
    background: ${(props) => !props.$active && "#f1f1f1"};
  }
`;
