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
      color: #333;
    }

    p {
      margin: 5px 0;
      color: #666;
    }
  }

  button {
    background-color: #ff6f61;
    color: white;
    border: none;
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
      color: #333;
    }

    p {
      font-size: 24px;
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
