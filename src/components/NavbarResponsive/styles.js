import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 50%;
  height: 100%;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(33, 16, 14);
  background: linear-gradient(
    90deg,
    rgba(33, 16, 14, 1) 0%,
    rgba(80, 45, 10, 1) 46%,
    rgba(0, 0, 0, 1) 100%
  );

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.4s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-center: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
        color: var(--primary-text-color);
        cursor: pointer;
      }

      nav {
        transform: scale(1);
      }

      a {
        color: var(--primary-text-color);
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 22px;
      }

      a:hover {
        font-weight: 400;
        transition: 0.2s;
      }
    `}
`;
