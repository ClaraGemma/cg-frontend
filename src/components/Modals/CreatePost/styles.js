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

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1em;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  transition: transform 0.2s, filter 0.2s;

  &:hover {
    transform: scale(0.9);
    filter: brightness(0.7);
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  padding: 5px 10px;
  z-index: 10;
  transform: translate(-50%, -50%);
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 22px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);

  ${ImageWrapper}:hover & {
    display: block;
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

export const FileInputLabel = styled.label`
  display: block;
  padding: 12px 24px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-text-color);
  transition: 0.3s;

  &:hover {
    border: 1px solid #f66f00;
    background-color: #f0f8ff;
    color: #f66f00;
  }
`;
