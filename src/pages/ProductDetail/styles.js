import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #f5f5f5;
  max-width: 1200px;
  margin: auto;
  gap: 20px; /* Espaçamento entre produto e reviews */
`;

export const ProductImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

export const ProductInfo = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

export const ProductTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 16px;
  color: #333;
  font-family: "Livvic", sans-serif; /* Adicionando a fonte Livvic */
  font-weight: bold;
`;

export const ProductDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
  font-family: "Poppins", sans-serif; /* Adicionando a fonte Poppins */
`;

export const ProductPrice = styled.p`
  font-size: 22px;
  color: #f66f00;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif; /* Adicionando a fonte Poppins */
`;

export const ColorOptions = styled.div`
  margin-top: 20px;

  p {
    font-size: 16px;
    color: #333;
    font-family: "Poppins", sans-serif;
  }
`;

export const SizeOptions = styled.div`
  margin-top: 20px;

  p {
    font-size: 16px;
    color: #333;
    font-family: "Poppins", sans-serif;
  }
`;

export const OptionButton = styled.button`
  background-color: ${({ selected }) => (selected ? "#f66f00" : "#f5f5f5")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  border: 1px solid ${({ selected }) => (selected ? "#f66f00" : "#ddd")};
  border-radius: 4px;
  padding: 10px 20px;
  margin-right: 10px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#ae4f00" : "#ddd")};
  }
`;

export const AddToCartButton = styled.button`
  background-color: #f66f00;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  font-family: "Livvic", sans-serif; /* Adicionando a fonte Livvic no botão */

  &:hover {
    background-color: #ae4f00;
  }
`;

export const ReviewsContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Espaço acima do container de reviews */
  width: 100%; /* Para que a seção ocupe toda a largura disponível */
  max-width: 1200px; /* Para limitar a largura máxima, se necessário */
  margin: auto; /* Para centralizar na página */
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ReviewInput = styled.textarea`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  font-family: "Poppins", sans-serif; /* Adicionando a fonte Poppins */
`;

export const AddRatingButton = styled.button`
  background-color: #f66f00;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 300px;
  margin-top: 1em;
  font-family: "Livvic", sans-serif; /* Adicionando a fonte Livvic no botão */

  &:hover {
    background-color: #ae4f00;
  }
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0 0.5em 0;
`;

export const Star = styled.div`
  cursor: pointer;
  margin-right: 5px;
`;

export const ReviewerName = styled.div``;

export const ReviewList = styled.div`
  margin-top: 20px;
`;

export const ReviewItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: "Poppins", sans-serif; /* Adicionando a fonte Poppins para as avaliações */
`;

export const QuantityOptions = styled.div`
  margin: 20px 0;
  p {
    font-size: 16px;
    color: #333;
    font-family: "Poppins", sans-serif;
  }
  select {
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-family: "Poppins", sans-serif;
    margin-top: 10px;
    width: 100px;
    font-size: 14px;
  }
`;
