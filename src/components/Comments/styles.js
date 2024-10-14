import styled from "styled-components";

export const CommentsContainer = styled.div`
  margin-top: 40px; /* Espaço acima da seção de comentários */
  background-color: #fff; /* Cor de fundo branca */
  padding: 20px; /* Espaçamento interno */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const CommentInput = styled.textarea`
  resize: none;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 100px; /* Altura fixa para o campo de comentário */
`;

export const SubmitButton = styled.button`
  background-color: #007bff; /* Cor do botão */
  color: white; /* Cor do texto */
  border: none; /* Sem borda */
  border-radius: 4px; /* Bordas arredondadas */
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
  }
`;

export const CommentList = styled.ul`
  list-style: none; /* Remove os marcadores da lista */
  padding: 0; /* Remove o preenchimento */
`;

export const CommentItem = styled.li`
  margin-bottom: 15px; /* Espaço entre os comentários */
  padding: 10px;
  border: 1px solid #ddd; /* Borda do comentário */
  border-radius: 4px; /* Bordas arredondadas */
`;
