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
  CloseButton,
  Button,
  FileInputLabel,
} from "./styles.js";

function CreatePost() {
  const [selectedImage, setSelectedImage] = useState();

  const fileInputRef = useRef();
  const inputTitle = useRef();
  const inputDesc = useRef();
  const dateTime = new Date().toISOString();

  async function createPosts() {
    await api.post("/posts", {
      title: inputTitle.current.value,
      desc: inputDesc.current.value,
      image_url: selectedImage,
      date_time: dateTime,
    });
  }

  const handleImageRemove = () => {
    setSelectedImage(undefined);
    fileInputRef.current.value = null;
  };

  return (
    <Container>
      <Form>
        <h1>Nova Postagem</h1>
        <InputField>
          <Input
            name="title"
            type="text"
            placeholder="Adicione um título"
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
        <Button type="button" onClick={createPosts}>
          Postar
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
