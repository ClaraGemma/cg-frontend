import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-background-color);
  padding: 10em 15em 0.1em 15em;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 100%;
`;

export const ContactUs = styled.li`
  h1 {
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 24px;
    margin-bottom: 2em;
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5em;

  img {
    width: 25px;
  }

  p {
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 15px;
    margin-left: 0.5em;
  }
`;

export const Mapa = styled.div``;

export const Copyright = styled.li`
  text-align: center;
  color: var(--primary-text-color);
  list-style: none;
`;
