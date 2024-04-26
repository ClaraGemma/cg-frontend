import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-color);
  padding: 2em;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  padding-right: 5em;

  & a {
    color: #fff;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 22px;
  }

  & a:hover {
    font-size: 23px;
    transition: 1;
  }

  & a:active {
    color: red;
  }
`;
