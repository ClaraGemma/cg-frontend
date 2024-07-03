import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: green;
`;

export const Form = styled.form`
  background-color: gray;
  width: auto;
  height: auto;
  padding: 2em;

  h1 {
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 24px;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 16px;
  padding: 20px 45px;

  &::placeholder {
    color: var(--primary-text-color);
  }
`;

export const TextArea = styled.textarea`
  margin: auto;
  width: 100%;
  outline: none;
  border: 1px solid gray;
  font-size: 16px;
  padding: 10px;
  resize: none;
`;
