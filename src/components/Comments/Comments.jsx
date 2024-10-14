import { useState } from "react";

import {
  CommentsContainer,
  CommentForm,
  CommentInput,
  SubmitButton,
  CommentList,
  CommentItem,
} from "./styles.js";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      const newComment = {
        id: comments.length + 1, // Gera um ID simples
        text: commentText,
      };
      setComments([...comments, newComment]); // Adiciona o novo comentário à lista
      setCommentText(""); // Limpa o campo de texto
    }
  };

  return (
    <CommentsContainer>
      <h2>Avaliações e Comentários</h2>
      <CommentForm onSubmit={handleCommentSubmit}>
        <CommentInput
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Deixe seu comentário..."
        />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </CommentForm>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>{comment.text}</CommentItem>
        ))}
      </CommentList>
    </CommentsContainer>
  );
};

export default Comments;
