import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
    color: #333;
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
    justify-content: center; // Centraliza verticalmente o botão "Deletar"
    align-items: flex-end; // Mantém o botão à direita
    gap: 10px;
    margin-left: 20px; // Espaçamento entre as opções e o botão
  }
`;

export const ReviewFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
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
