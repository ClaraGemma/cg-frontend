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
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();
  const inputTitle = useRef();
  const inputDesc = useRef();
  const dateTime = new Date().toISOString();

  async function createPosts() {
    const formData = new FormData();
    formData.append("title", inputTitle.current.value);
    formData.append("desc", inputDesc.current.value);
    formData.append("date_time", dateTime);

    if (fileInputRef.current.files[0]) {
      formData.append("file", fileInputRef.current.files[0]);
    }

    await api.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  const handleImageRemove = () => {
    setSelectedImage(null);
    fileInputRef.current.value = null;
  };

  return (
    <Container>
      <Form>
        <h1>Entre com as informações do novo produto</h1>
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
              setSelectedImage(file ? URL.createObjectURL(file) : null);
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
        <div className="hr"></div>
        <Button className="submit-button" type="button" onClick={createPosts}>
          Postar
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
