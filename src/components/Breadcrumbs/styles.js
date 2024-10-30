import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbsContainer = styled.div`
  display: flex;
  // justify-content: center;
  margin: 20px 0 20px 333px; /* Margem superior e inferior */
  font-size: 16px; /* Aumenta o tamanho da fonte para melhor legibilidade */
  color: #333; /* Cor do texto */
  font-family: "Livvic", sans-serif; /* Aplica a fonte Livvic */
`;

export const BreadcrumbLink = styled(Link)`
  color: #f66f00; /* Cor dos links, usei uma cor que combina com seu design */
  text-decoration: none;
  transition: color 0.3s ease; /* Adiciona uma transição suave para a cor */

  &:hover {
    color: #ff953e; /* Muda a cor ao passar o mouse */
    text-decoration: underline; /* Sublinhado ao passar o mouse */
  }

  &::after {
    content: ">";
    margin: 0 8px; /* Espaço entre os links */
    color: #f66f00; /* Cor do separador */
  }

  &:last-child::after {
    content: ""; /* Remove o separador do último link */
  }
`;
