import { FaLock, FaUser } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  width: 450px;
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 10px;

  h1 {
    text-align: center;
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 24px;
  }

  p {
    text-align: center;
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 13px;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 16px;
  padding: 20px 45px;

  &::placeholder {
    color: var(--primary-text-color);
  }
`;

export const StyledFaUser = styled(FaUser)`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: var(--primary-text-color);
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`;

export const StyledFaLock = styled(FaLock)`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: var(--primary-text-color);
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`;

export const ForgetPassword = styled.div`
  font-size: 13px;
  margin: -15px 0 15px;

  a {
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid green;
  outline: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-text-color);
  transition: 0.3s;

  &: hover {
    background-color: green;
    color: var(--second-text-color);
  }
`;
