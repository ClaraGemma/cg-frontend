import styled from "styled-components";
import background from "../../assets/background_home.svg";

export const Container = styled.div``;

export const Banner = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--second-text-color);
    font-family: "Livvic", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 50px;
    letter-spacing: 5px;
  }

  h2 {
    color: var(--second-text-color);
    font-family: "Livvic", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 42px;
    letter-spacing: 3px;
  }
`;

export const Box01 = styled.div`
  display: flex;
  justify-content: center;
  padding: 10em;
`;

export const Box02 = styled.div`
  display: flex;
  justify-content: center;
  padding: 10em;

  h1,
  p {
    text-align: right;
    width: 90%;
  }
`;

export const Box03 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10em 10em;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    gap: 6em;
  }
`;

export const TextContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  width: 50%;

  h1 {
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 2em;
  }

  p {
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 20px;
    width: 90%;
    word-wrap: break-word;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 232px;
`;
