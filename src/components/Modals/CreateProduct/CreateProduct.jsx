import { useState, useRef } from "react";
import api from "../../../services/api.js";

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
  const inputTitle = useRef();
  const inputDesc = useRef();
  const inputPrice = useRef();
  const dateTime = new Date().toISOString();

  async function createProducts() {
    const formData = new FormData();
    formData.append("title", inputTitle.current.value);
    formData.append("desc", inputDesc.current.value);
    formData.append("price", inputPrice.current.value);
    formData.append("date_time", dateTime);

    if (fileInputRef.current.files[0]) {
      formData.append("file", fileInputRef.current.files[0]);
    }

    await api.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  const handleImageRemove = () => {
    setSelectedImage(undefined);
    fileInputRef.current.value = null;
  };

  return (
    <Container>
      <Form>
        <h1>Novo produto</h1>
        <InputField>
          <Input
            name="title"
            type="text"
            placeholder="Nome do produto"
            ref={inputTitle}
          />
        </InputField>

        <InputField>
          <TextArea
            name="desc"
            type="text"
            placeholder="Adicione uma descrição"
            ref={inputDesc}
          />
        </InputField>

        <InputField>
          <Input
            name="price"
            type="text"
            placeholder="Valor (R$)"
            ref={inputPrice}
          />
        </InputField>

        <InputField>
          <Input
            name="image"
            type="file"
            accept="image/*"
            id="image"
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

        <Button type="button" onClick={createProducts}>
          Adicionar
        </Button>
      </Form>
    </Container>
  );
}

export default CreateProduct;
