import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    font-family: "Livvic", sans-serif;
    color: #333;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  img {
    width: 100px;
    height: auto;
    margin-right: 20px;
  }

  .item-details {
    flex: 1;

    h2 {
      font-size: 20px; /* Título maior */
      font-family: "Livvic", sans-serif;
      color: #333;
      margin: 0 0 5px 0; /* Adiciona espaçamento abaixo do título */
    }

    .description {
      font-size: 14px; /* Descrição menor */
      font-family: "Poppins", sans-serif;
      color: #666;
      margin: 5px 0;
    }

    .price {
      font-size: 18px; /* Preço maior */
      font-family: "Poppins", sans-serif;
      color: #f66f00; /* Cor laranja */
      margin: 10px 0;
    }
  }

  button {
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
  }
`;

export const CartFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 20px 0;

  .total {
    h2 {
      font-size: 20px;
      font-family: "Livvic", sans-serif;
      color: #333;
    }

    p {
      font-size: 24px;
      font-family: "Poppins", sans-serif;
      color: #333;
    }
  }

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
