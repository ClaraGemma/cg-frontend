import styled from "styled-components";
import { ErrorMessage, Field, Form } from "formik";
import { FaLock, FaUser } from "react-icons/fa";
import backgroundImage from "../../assets/background_login.jpg";

export const Body = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 80%;
  max-width: 1100px;
  background-color: rgba(255, 166, 94, 0.9);
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .form-container {
    position: relative;
    width: 50%;
    padding: 70px;
    padding-top: 120px;
    margin: 0;
    top: 50px;
    background-color: #fff1df;
    left: 20px;
    z-index: 1;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .phrase-column {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    flex: 1;
    padding: 20px;
  }

  .phrase-column p {
    margin-bottom: 20px; /* Ajuste a distância entre o texto e a imagem */
    font-size: 25px;
    font-weight: 500;
    font-family: "Pangolin", cursive;
  }

  .phrase-column img {
    width: 60%;
    height: auto;
    margin: 8em 0 2em 0;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;

  h1 {
    text-align: center;
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 28px;
  }

  p {
    text-align: center;
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-size: 14px;
  }

  .register-link {
    color: #666;
  }

  .register-link .register {
    color: #f66f00;
    text-decoration: none;
    font-weight: 500;
  }

  .register:hover {
    text-decoration: underline;
  }
`;

export const LoginFormGroup = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px auto;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px 30px 10px 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #f66f00;

  &::placeholder {
    color: var(--primary-text-color);
  }
`;

export const StyledFaUser = styled(FaUser)`
  position: absolute;
  left: 10px; /* Alinha o ícone à esquerda do campo */
  top: 50%;
  transform: translateY(-70%);
  font-size: 18px;
  color: var(--primary-text-color);
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`;

export const StyledFaLock = styled(FaLock)`
  position: absolute;
  left: 10px; /* Alinha o ícone à esquerda do campo */
  top: 50%;
  transform: translateY(-70%);
  font-size: 18px;
  color: var(--primary-text-color);
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-family: "Poppins", sans-serif;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #f66f00;
  outline: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
  color: var(--primary-text-color);
  transition: 0.3s;
  margin-bottom: 1em;

  &: hover {
    background-color: #f66f00;
    color: var(--second-text-color);
  }
`;
