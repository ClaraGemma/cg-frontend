import { useState, useRef } from "react";
import {
  Container,
  Form,
  InputField,
  Input,
  TextArea,
  ImageWrapper,
  Image,
  FileInputLabel,
  CloseButton,
  Button,
} from "./styles.js";

function CreateProduct() {
  const [selectedImage, setSelectedImage] = useState();
  const fileInputRef = useRef();

  const handleImageRemove = () => {
    setSelectedImage(undefined);
    fileInputRef.current.value = null;
  };

  return (
    <Container>
      <Form>
        <h1>Novo produto</h1>
        <InputField>
          <Input type="text" placeholder="Produto" required />
        </InputField>

        <InputField>
          <TextArea placeholder="Descrição" required />
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

        <Button>Adicionar</Button>
      </Form>
    </Container>
  );
}

export default CreateProduct;
