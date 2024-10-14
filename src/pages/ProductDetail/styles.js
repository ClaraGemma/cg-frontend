import styled from "styled-components";

// Container principal da página do produto
export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: row; /* Alinha a imagem e as informações lado a lado */
  padding: 20px; /* Reduzido para ficar mais próximo do estilo do Mercado Livre */
  background-color: #f5f5f5; /* Cor de fundo semelhante */
  min-height: 100vh;
  max-width: 1200px; /* Limita a largura máxima para centralizar */
  margin: auto; /* Centraliza o container */
`;

// Imagem do produto
export const ProductImage = styled.img`
  width: 400px; /* Aumenta a largura da imagem */
  height: 400px; /* Aumenta a altura da imagem */
  object-fit: cover; /* Mantém a proporção da imagem */
  border: 1px solid #ddd; /* Adiciona uma borda suave */
  border-radius: 4px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  margin-right: 20px; /* Espaço entre a imagem e as informações do produto */
`;

// Informações do produto
export const ProductInfo = styled.div`
  background-color: #fff; /* Cor de fundo branca para as informações */
  padding: 20px;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  width: 100%;
  max-width: 600px; /* Largura máxima para as informações do produto */
`;

// Título do produto
export const ProductTitle = styled.h1`
  font-size: 26px; /* Ajuste na fonte */
  margin-bottom: 16px;
  color: #333; /* Cor do texto */
  font-weight: bold; /* Deixa o título mais destacado */
`;

// Descrição do produto
export const ProductDesc = styled.p`
  font-size: 14px; /* Fonte um pouco menor */
  color: #666; /* Cor mais suave */
  margin-bottom: 20px;
  line-height: 1.5; /* Melhora a legibilidade */
`;

// Preço do produto
export const ProductPrice = styled.p`
  font-size: 22px; /* Ajuste na fonte do preço */
  color: #e63946; /* Cor para o preço */
  font-weight: bold;
  margin-bottom: 20px;
`;

// Botão de adicionar ao carrinho
export const AddToCartButton = styled.button`
  background-color: #ffcc00; /* Cor semelhante ao botão do Mercado Livre */
  color: #333; /* Cor do texto do botão */
  border: none; /* Sem borda */
  border-radius: 4px; /* Bordas arredondadas */
  padding: 12px 24px; /* Tamanho do botão */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; /* O botão ocupa toda a largura disponível */
  max-width: 300px; /* Limita a largura do botão */

  &:hover {
    background-color: #e0a800; /* Cor do botão ao passar o mouse */
  }
`;

// Estilos para a seção de avaliações
export const ReviewsContainer = styled.div`
  margin: 20px 0;
  background-color: #fff; /* Cor de fundo branca */
  padding: 20px;
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
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
  resize: none; /* Desabilita a redimensionação */
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled.div`
  cursor: pointer;
  margin-right: 5px;
`;

export const ReviewList = styled.div`
  margin-top: 20px;
`;

export const ReviewItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd; /* Borda para cada avaliação */
  border-radius: 4px;
`;
