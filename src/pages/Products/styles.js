import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
  position: relative;
  width: 100%;
  max-width: 700px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  padding-right: 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #f66f00;
  }
`;

export const SearchIconWrapper = styled.button`
  position: absolute;
  right: 20px; /* Posiciona o ícone dentro da barra de pesquisa */
  background: transparent;
  border: none;
  color: #f66f00;
  cursor: pointer;
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  font-size: 20px;

  &:hover {
    color: #ff953e;
  }
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se movam para a linha seguinte */
  gap: 90px; /* Espaço entre os itens */
  justify-content: center; /* Centraliza os itens */
  padding: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  background: ${(props) => (props.$active ? "#f66f00" : "#fff")};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#fff" : "#f66f00")};

  &:hover {
    background: ${(props) => !props.$active && "#f1f1f1"};
  }
`;
