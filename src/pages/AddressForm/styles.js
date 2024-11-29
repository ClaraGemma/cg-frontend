import styled from "styled-components";
import { Field, Form } from "formik";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .main-content {
    display: flex;
    gap: 20px;
    justify-content: center;
    width: 100%;
  }

  .order-actions {
    position: sticky;
    top: 20px;
    width: 400px;
    border: 1px solid #ddd;
    height: 100%;
    border-radius: 8px;
    background-color: #f9f9f9;
    padding: 2em;
    margin-left: 1em;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 500;
      font-family: "Livvic", sans-serif;
      color: var(--primary-text-color);
    }

    p {
      font-size: 14px;
      font-weight: 400;
      font-family: "Poppins", sans-serif;
      color: var(--primary-text-color);
    }

    .frete-line {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 12px;
      font-family: "Livvic", sans-serif;
      color: #222;
    }

    .frete-line p {
      font-size: 20px;
      font-weight: 500;
      font-family: "Livvic", sans-serif;
      color: #f66f00;
    }

    .total-line {
      display: flex;
      justify-content: space-between; /* Extremos opostos */
      width: 100%;
      font-size: 20px;
      font-family: "Livvic", sans-serif;
      color: #f66f00;
    }

    .total-line p {
      font-size: 20px;
      font-weight: 500;
      font-family: "Livvic", sans-serif;
      color: #f66f00;
    }

    button {
      width: 100%;
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 12px 24px;
      cursor: pointer;
      border-radius: 8px;
      font-family: "Livvic", sans-serif;
      font-size: 16px;

      &:hover {
        background-color: #388e3c;
      }
    }

    .cancel-button {
      background-color: #e53935;
    }

    .cancel-button:hover {
      background-color: #d32f2f;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;

  h1 {
    font-size: 28px;
    font-family: "Livvic", sans-serif;
    color: #222;
    margin-bottom: 10px;
  }

  .description {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    color: #666;
    text-align: center;
    margin-top: 10px;
    max-width: 800px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 620px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #333;
`;

export const StyledField = styled(Field)`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #ddd;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 8px;
  font-family: "Livvic", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #388e3c;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;

  h3 {
    margin-bottom: 20px;
    font-family: "Livvic", sans-serif;
    font-size: 18px;
    color: #333;
  }

  .modal-actions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  width: 45%;

  &.confirm {
    background-color: transparent;
    color: #4caf50;
    border: 1px solid #4caf50;

    &:hover {
      text-decoration: underline;
    }
  }

  &.cancel {
    background-color: #e53935;
    color: white;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;
