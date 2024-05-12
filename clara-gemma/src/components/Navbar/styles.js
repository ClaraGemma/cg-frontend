import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-background-color);
  padding: 2em;
  position: fixed; /* Fixa a navbar */
  width: 100%; /* Faz a navbar ocupar toda a largura da tela */
  top: 0; /* Posiciona a navbar no topo da janela de visualização */
  z-index: 1000; /* Define a ordem de empilhamento */
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Logo = styled.li`
  padding-right: 2em;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const Name = styled.li`
  padding-right: 5em;

  & a {
    color: var(--primary-text-color);
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 24px;
    letter-spacing: 5px;
  }

  & a:hover {
    font-weight: 400;
    transition: 0.1s;
  }
`;

export const Item = styled.li`
  padding-right: 5em;

  & a {
    color: var(--primary-text-color);
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 22px;
  }

  & a:hover {
    font-weight: 300;
    transition: 0.1s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const More = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 30px;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
`;
