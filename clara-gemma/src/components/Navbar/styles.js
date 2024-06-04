import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary-background-color);
  padding: 2em;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.li`
  @media (max-width: 906px) {
    padding-right: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 10em;
  justify-content: center;
  flex: 1;
  padding-right: 8%;
`;

export const Item = styled.li`
  & a {
    color: var(--primary-text-color);
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;
  }

  & a:hover {
    font-weight: 300;
  }

  @media (max-width: 906px) {
    display: none;
  }
`;

export const More = styled.div`
  display: none;

  @media (max-width: 906px) {
    display: flex;
    position: absolute;
    right: 30px;
    color: #222;
    font-size: 24px;
    cursor: pointer;
  }
`;
