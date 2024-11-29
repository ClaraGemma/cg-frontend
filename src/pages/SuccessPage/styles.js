import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  background-color: #ffffff;
  color: #333333;
`;

export const Message = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

export const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #555555;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  background-color: #4caf50;
  color: white;

  &:nth-child(1) {
    background-color: transparent;
    color: #f66f00;

  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }
`;
