import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-color);
  padding: 2em;
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
    font-size: 22px;
  }

  & a:hover {
    font-weight: 300;
  }

  @media (max-width: 906px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 906px) {
    display: none;
  }
`;

export const Button = styled.div`
  background-color: var(--button-background-color);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  a {
    color: var(--button-text-color);
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

  &:hover {
    background-color: var(--button-hover-background-color);
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

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  color: var(--button-text-color);
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  &:hover {
    background: #f5f5f5;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: black;
  }
`;
