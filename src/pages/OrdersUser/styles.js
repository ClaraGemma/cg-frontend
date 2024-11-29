import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main-content {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .order-items {
    flex: 3;
    max-width: 1000px;
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

export const OrderItem = styled.div`
  padding: 25px;
  max-width: 900px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin: 20px auto;

  .item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: "Livvic", sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: #222;
      display: flex;
      align-items: center;

      .copy-icon {
        margin-left: 8px;
        color: #555;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #000;
        }
      }
      .protocol-link {
        text-decoration: none;
        color: #222;
        transition: color 0.3s;

        &:hover {
          color: #f66f00; /* Azul para indicar interatividade */
        }
      }
    }

    .right-info {
      display: flex;
      gap: 20px;

      p {
        font-family: "Poppins", sans-serif;
        color: #666;
        margin: 0;
      }

      .status {
        background-color: #ff7c11;
        color: #fff;
        padding: 1.5px 5px;
        border-radius: 8px;

        &:hover {
          background-color: #f66f00;
          border-radius: 6px;
        }
      }
    }
  }

  .item-details {
    margin-top: 10px;
    background-color: #f9f9f9;

    .hr {
      border-top: 1px solid #ddd;
      width: 100%;
      margin: auto;
    }

    .item-name {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        margin-right: 10em;
      }

      p {
        font-family: "Poppins", sans-serif;
        margin: 5px 0;
        color: #222;
      }

      .right-info {
        display: flex;
        gap: 20px;
        justify-content: flex-end;
        align-items: center;
        font-size: 14px;
        color: #666;
      }
    }

    .subtotal {
      margin-bottom: 2em;
      font-family: "Poppins", sans-serif;
      color: #222;
      font-weight: 400;
    }
  }

  .total-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .total {
    font-family: "Poppins", sans-serif;
    text-align: right;
    font-weight: bold;
    color: #222;
  }
`;

export const CopyMessage = styled.div`
  position: absolute;
  background-color: #333;
  color: #ddd;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  pointer-events: none;
  transition: opacity 0.3s;
  opacity: 0;
  z-index: 1000;
`;

export const OrderItemEmpty = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  justify-content: center;

  .empty-cart {
    font-family: "Poppins", sans-serif;
    color: #666;
  }
`;

export const WhatsAppButton = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-right: 10px;

  &:hover {
    background-color: #128c7e;
  }
`;
