import { ErrorMessage, Field, Form } from "formik";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import backgroundImage from "../../assets/background_register.jpg";

export const Body = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    position: relative;
    width: 30%;
    padding: 70px;
    padding-top: 120px;
    margin: 0;
    top: -90px;
    background-color: #fff1df;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

  .login-link {
    color: #666;
  }

  .login-link .login {
    color: #f66f00;
    text-decoration: none;
    font-weight: 500;
  }

  .login:hover {
    text-decoration: underline;
  }
`;

export const RegisterFormGroup = styled.div`
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

export const StyledMdEmail = styled(MdEmail)`
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
