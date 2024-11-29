import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha o conteúdo na parte superior */
  margin: 8rem 5rem 10rem 5rem;
`;

export const ContentWrapper = styled.div`
  max-width: 75%;
  font-family: "Poppins", sans-serif; /* Fonte Poppins para o texto */
`;

export const Section = styled.section`
  padding: 2rem 0; /* Mais espaçamento vertical entre seções */

  p {
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 18px; /* Reduzido um pouco para melhor legibilidade */
    margin-top: 1rem;
    line-height: 1.6; /* Melhora a legibilidade com mais espaçamento entre linhas */
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
  }

  ul li {
    margin-bottom: 0.5rem;
  }

  ul li a {
    color: var(--primary-color); /* Adicione sua cor primária */
    text-decoration: underline;
    font-weight: bold;
  }

  ul li a:hover {
    text-decoration: none; /* Remove o sublinhado no hover */
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 1rem;
    color: var(--primary-text-color);
    font-weight: bold;
    font-size: 28px; /* Tamanho maior para o título */
    font-family: "Livvic", sans-serif; /* Fonte Livvic para o título */
  }

  hr {
    flex-grow: 1;
    border: none;
    height: 2px; /* Espessura do separador aumentada para destaque */
    background-color: black;
  }
`;
