import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";

export const Container = styled.div`
  background-color: #404040;
  font-family: "Livvic", sans-serif;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha verticalmente no centro */
  padding: 2em;
  border-bottom: 1px solid #666;
`;

export const Box = styled.div`
  align-items: center;
  display: flex;

  h1 {
    padding-right: 30px;
    color: #f0f0f0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 23px;
  }
`;

export const Logo = styled.li`
  list-style: none;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-grow: 1;
  justify-content: center; /* Centraliza os itens no meio */
  align-items: center; /* Alinha verticalmente os itens */
`;

export const Item = styled.div`
  & a {
    color: #5e94a3;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 500;
  }

  & a:hover,
  & a.active {
    color: #f66f00;
  }
`;

export const StyledIoExit = styled(IoExitOutline)`
  font-size: 25px;
  color: #f05454;
  cursor: pointer;

  &:hover {
    color: #ff3333;
  }
`;
