import styled from "styled-components";
import background from "../../assets/background_home.svg";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Banner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--second-text-color);

  // Aplicar um fundo escuro com embaçamento
  background: rgba(0, 0, 0, 1); // Para sombrear
  backdrop-filter: blur(10px); // Para embaçar o que está atrás
  position: relative; // Para controlar a posição dos elementos dentro
  overflow: hidden; // Para evitar que elementos saiam do banner

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${background}); // Imagem de fundo, se necessário
    background-size: cover;
    background-position: center;
    opacity: 0.4; // Opacidade da imagem para não sobrecarregar
    z-index: -1; // Para colocar atrás do texto
  }
`;

export const TextContainer = styled.div`
  max-width: 600px; // Limita a largura do texto
  padding: 2rem;

  h1 {
    font-family: "Livvic", sans-serif;
    font-weight: 700;
    font-size: 48px;
    margin: 0;
  }

  h2 {
    font-family: "Livvic", sans-serif;
    font-weight: 400;
    font-size: 36px;
    margin: 0.5em 0;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin: 1em 0;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #ff7e5f, #feb47b); // Gradiente do botão
  color: white;
  font-family: "Livvic", sans-serif;
  font-size: 18px;
  font-weight: 600;
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(
      90deg,
      #feb47b,
      #ff7e5f
    ); // Gradiente invertido para hover
    transform: scale(1.05); // Efeito de leve aumento no hover
  }
`;
