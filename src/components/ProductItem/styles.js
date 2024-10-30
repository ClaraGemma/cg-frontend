import styled from "styled-components";

export const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza a imagem horizontalmente */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 50%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: "Livvic", sans-serif;

  &:hover {
    color: #f66f00;
  }
`;

export const ProductDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin: 8px 0;
  font-family: "Poppins", sans-serif;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #f66f00;
  margin: 0;
  font-family: "Poppins", sans-serif;
`;

export const AddToCartButton = styled.button`
  background-color: #f66f00;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-family: "Livvic", sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ae4f00;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-family: "Livvic", sans-serif;
  transition: background-color 0.3s ease;
`;
