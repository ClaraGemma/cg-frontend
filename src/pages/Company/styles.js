import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem 5rem 10rem 5rem;
`;

export const ContentWrapper = styled.div`
  max-width: 75%;
`;

export const Section = styled.section`
  // background-color: yellow;
  padding: 1rem;

  p {
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 20px;
    word-wrap: break-word;
    margin-top: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 1rem;
    color: var(--primary-text-color);
    font-weight: bold;
    font-size: 24px;
  }

  hr {
    flex-grow: 1;
    border: none;
    height: 1px;
    background-color: black;
  }
`;
