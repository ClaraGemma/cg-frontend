import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 4em;
  text-align: center;

  h1 {
    text-align: left;
    color: var(--primary-text-color);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 24px;
    margin-top: -20px;
    margin-bottom: 1.5em;
  }

  h3 {
    text-align: left;
    margin: 20px 0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: var(--primary-text-color);
  }

  .variation-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .submit-button {
    margin-top: 20px;
    border-radius: 5px;
    width: 25%;
  }

  .hr {
    margin: 1em;
    border: 1px solid #f2f2f2;
  }
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 20px auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 12px;
  border: 1px solid #222;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Livvic", sans-serif;

  &::placeholder {
    color: var(--primary-text-color);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  outline: none;
  padding: 12px;
  border: 1px solid #222;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Livvic", sans-serif;
  resize: none;

  &::placeholder {
    color: var(--primary-text-color);
  }
`;

export const VariationGroup = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 15px;

  .remove {
    text-align: right;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  outline: none;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-text-color);
  background-color: transparent;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid #f66f00;
    background-color: #f0f8ff;
    color: #f66f00;
  }
`;
