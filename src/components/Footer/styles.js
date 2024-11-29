import styled from "styled-components";

export const Container = styled.div`
  background-color: #5e94a3;
  color: #f8f9f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Livvic", sans-serif;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 5em 4em 0 4em;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
`;

export const ContactUs = styled.div`
  text-align: left;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  p {
    margin: 0; /* Remover margem padrão do parágrafo */
    font-size: 1rem; /* Definir tamanho da fonte */
  }

  svg {
    font-size: 1.5rem; /* Ajuste do tamanho do ícone */
    color: #f8f9f0; /* Cor do ícone */
  }

  a {
    color: #f8f9f0; /* Cor do link */
    text-decoration: none; /* Remover o sublinhado */
    font-size: 1rem;
    margin-left: 0.5rem;

    &:hover {
      color: #ffc107; /* Cor de hover */
      text-decoration: underline; /* Sublinhado no hover */
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const Copyright = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  font-family: "Livvic", sans-serif; /* Aplicando a fonte Livvic */
`;
