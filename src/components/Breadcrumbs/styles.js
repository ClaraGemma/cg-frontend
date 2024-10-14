import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0; /* Margem superior e inferior */
  font-size: 14px; /* Tamanho da fonte */
  color: #666; /* Cor do texto */
`;

export const BreadcrumbLink = styled(Link)`
  color: #007bff; /* Cor dos links */
  text-decoration: none;

  &:hover {
    text-decoration: underline; /* Sublinhado ao passar o mouse */
  }

  &::after {
    content: ">";
    margin: 0 8px; /* Espaço entre os links */
  }

  &:last-child::after {
    content: ""; /* Remove o separador do último link */
  }
`;
