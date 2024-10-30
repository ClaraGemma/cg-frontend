import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f9f0;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Livvic", sans-serif;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 0 2rem;
`;

export const Logo = styled.div`
  img {
    height: 60px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-grow: 1;
  justify-content: center;
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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.div`
  background-color: #5e94a3;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;

  & a {
    color: #f8f9f0;
    font-size: 1rem;
    text-decoration: none;
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #5e94a3;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #f66f00;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background-color: #f8f9f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s;

  & a {
    color: #5e94a3;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
  }

  /* Efeito de hover somente em "Meu perfil" e "Meu carrinho" */
  &:not(:last-child):hover {
    background-color: #f66f00;
    & a {
      color: #f8f9f0;
    }
  }

  /* Estilo específico para o botão "Sair" */
  & button {
    background-color: #ff4b4b;
    color: #f8f9f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: bold;
    margin-top: 0.5rem;
    width: 100%;
    cursor: pointer;
  }

  & button:hover {
    background-color: #cc3a3a; /* Hover para o botão "Sair" */
  }
`;
