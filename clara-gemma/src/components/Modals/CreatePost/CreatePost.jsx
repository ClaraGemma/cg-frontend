import { useState, useRef } from "react";
import {
  Container,
  Form,
  InputField,
  Input,
  TextArea,
  ImageWrapper,
  Image,
  CloseButton,
  Button,
  FileInputLabel,
} from "./styles.js";

function CreatePost() {
  const [selectedImage, setSelectedImage] = useState();
  const fileInputRef = useRef();

  const handleImageRemove = () => {
    setSelectedImage(undefined);
    fileInputRef.current.value = null;
  };

  return (
    <Container>
      <Form>
        <h1>Nova Postagem</h1>
        <InputField>
          <Input type="text" placeholder="Adicione um título" required />
        </InputField>

        <InputField>
          <TextArea placeholder="Adicione uma descrição" required />
        </InputField>

        <InputField>
          <Input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0];
              setSelectedImage(file ? URL.createObjectURL(file) : undefined);
            }}
            hidden
          />
          <FileInputLabel htmlFor="image">Adicionar imagem</FileInputLabel>
        </InputField>

        {selectedImage && (
          <ImageWrapper>
            <Image src={selectedImage} />
            <CloseButton onClick={handleImageRemove}>
              Remover imagem
            </CloseButton>
          </ImageWrapper>
        )}
        <Button>Confirmar</Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
