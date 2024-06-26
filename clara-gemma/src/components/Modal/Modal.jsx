import { Container, ModalContent, CloseButton } from "./styles.js";
// eslint-disable-next-line react/prop-types
export default function Modal({
  isOpen,
  children,
  setOpenModal,
  setOpenModalPr,
}) {
  if (isOpen) {
    return (
      <Container>
        <ModalContent>
          <CloseButton onClick={setOpenModal || setOpenModalPr} />
          {children}
        </ModalContent>
      </Container>
    );
  }

  return null;
}
