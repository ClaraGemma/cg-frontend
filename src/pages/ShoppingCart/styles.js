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
      font-size: 18px;
      font-family: "Livvic", sans-serif;
      color: #333;
    }

    p {
      margin: 5px 0;
      font-family: "Poppins", sans-serif;
      color: #666;
    }
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: #eee;
      color: #333;
      border: 1px solid #ccc;
      padding: 5px 10px;
      font-family: "Livvic", sans-serif;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #ddd;
      }

      &:disabled {
        color: #aaa;
        cursor: not-allowed;
      }
    }

    span {
      font-size: 16px;
      margin: 0 8px;
    }
  }

  button {
    background-color: #ff6f61;
    color: white;
    border: none;
    font-family: "Livvic", sans-serif;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: #ff3b2b;
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
    padding: 15px 30px;
    cursor: pointer;

    &:hover {
      background-color: #388e3c;
    }
  }
`;
