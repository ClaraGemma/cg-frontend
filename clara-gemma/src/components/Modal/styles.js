import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 150px;
  background-color: var(--primary-background-color);
  border-radius: 10px;
  color: var(--primary-text-color);
`;

export const CloseButton = styled(IoIosClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 2em;
  transition: 0.3s;

  &: hover {
    color: var(--exit-color);
  }
`;
