import styled from "styled-components";

export const OrderContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  h2 {
    font-family: "Livvic", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #222;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-family: "Livvic", sans-serif;
  color: #222;
  margin-bottom: 2rem;
`;

export const OrderInfo = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-family: "Livvic", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #222;
    display: flex;
    align-items: center;
  }

  p {
    font-family: "Poppins", sans-serif;
    color: #666;
    margin: 5px 0;
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 1rem;
`;

export const Item = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    color: #666;
    margin: 5px 0;
  }

  strong {
    color: #222;
  }
`;

export const TotalPrice = styled.h3`
  text-align: right;
  margin-top: 2rem;
  font-family: "Poppins", sans-serif;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  &:hover {
    background-color: #128c7e;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: red;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-top: 2rem;
`;
