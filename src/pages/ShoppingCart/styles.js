import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex; /* Flex container */
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */

  .main-content {
    display: flex;
    gap: 20px;
    justify-content: center; /* Centraliza horizontalmente */
  }

  .review-items {
    flex: 3;
    max-width: 1000px; /* Ajusta a largura */
  }

  .order-actions {
    position: sticky;
    top: 20px;
    width: 400px;
    height: 100%;
    border: 1px solid #ddd;
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

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 20px;

  img {
    width: 120px;
    height: auto;
    border-radius: 4px;
    margin-right: 20px;
  }

  .item-details {
    display: flex;
    flex-direction: column;
    flex: 1;

      h2, p {
        font-family: "Livvic", sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #222;
      }
    
      h2 {
        font-size: 20px;
        font-family: "Livvic", sans-serif;
        color: #333;
        margin-bottom: 10px;
      }
      
      p {
        font-family: "Poppins", sans-serif;
        color: #666;
        margin: 5px 0;
      }
    }

    .options {
      display: flex;
      justify-content: flex-start;
      gap: 20px;
    }

    .price {
      font-size: 16px;
      color: #333;
      font-weight: bold;
      margin-top: 10px;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    margin-left: 20px;
  }

  
`;

export const ReviewItemEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ddd;
  padding: 40px;
  border-radius: 10px;
  background-color: #f9f9f9;
  color: #666;
  text-align: center;

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  p {
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    color: #888;
  }

  button {
    background-color: #f66f00;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-family: "Livvic", sans-serif;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ec6a00;
    }
  }
`;

export const Dropdown = styled.div`
  select {
    padding: 5px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

export const DeleteButton = styled.button`
  background-color: #e53935;
  color: white;
  border: none;
  margin-right: 20px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #d32f2f;
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
