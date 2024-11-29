import { useState } from "react";
import api from "../../../services/api.js";
import {
  Container,
  Form,
  InputField,
  Input,
  TextArea,
  Button,
  VariationGroup,
} from "./styles.js";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [sizes, setSizes] = useState([]); // Armazena os tamanhos e preços
  const [colors, setColors] = useState([]); // Armazena as cores e imagens
  const [files, setFiles] = useState([]); // Armazena as imagens por cor

  // Adiciona um novo tamanho
  const addSize = () => {
    setSizes([...sizes, { size: "", price: "" }]);
  };

  // Remove um tamanho
  const removeSize = () => {
    setSizes(sizes.slice(0, -1));
  };

  // Atualiza os tamanhos
  const updateSize = (index, field, value) => {
    const updatedSizes = [...sizes];
    updatedSizes[index][field] = value;
    setSizes(updatedSizes);
  };

  // Adiciona uma nova cor
  const addColor = () => {
    setColors([...colors, { color: "", image: null }]);
  };

  // Remove uma cor
  const removeColor = () => {
    setColors(colors.slice(0, -1));
  };

  // Atualiza as cores
  const updateColor = (index, field, value) => {
    const updatedColors = [...colors];
    updatedColors[index][field] = value;
    setColors(updatedColors);
  };

  // Atualiza as imagens para as cores
  const handleFileChange = (index, file) => {
    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);
  };

  // Envia o formulário
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("date_time", new Date().toISOString());
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("colors", JSON.stringify(colors));

    files.forEach((file) => {
      if (file) formData.append("files", file);
    });

    const token = localStorage.getItem("token");

    try {
      await api.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Erro ao cadastrar produto.");
    }
  };

  return (
    <Container>
      <Form>
        <h1>Entre com as informações do novo produto</h1>
        <InputField>
          <Input
            name="title"
            type="text"
            placeholder="Nome"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputField>
        <InputField>
          <TextArea
            name="desc"
            placeholder="Descrição"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </InputField>

        {/* Tamanhos e preços */}
        <div className="variation-header">
          <h3>Tamanhos e Preços</h3>
          <div>
            <Button type="button" onClick={addSize}>
              +
            </Button>
            {sizes.length > 0 && (
              <Button type="button" onClick={removeSize}>
                -
              </Button>
            )}
          </div>
        </div>
        {sizes.map((size, index) => (
          <VariationGroup key={`size-${index}`}>
            <InputField>
              <Input
                placeholder="Tamanho"
                value={size.size}
                onChange={(e) => updateSize(index, "size", e.target.value)}
              />
            </InputField>
            <InputField>
              <Input
                placeholder="Preço (R$)"
                value={size.price}
                onChange={(e) => updateSize(index, "price", e.target.value)}
              />
            </InputField>
          </VariationGroup>
        ))}

        {/* Cores e imagens */}
        <div className="variation-header">
          <h3>Cores e Imagens</h3>
          <div>
            <Button type="button" onClick={addColor}>
              +
            </Button>
            {colors.length > 0 && (
              <Button type="button" onClick={removeColor}>
                -
              </Button>
            )}
          </div>
        </div>
        {colors.map((color, index) => (
          <VariationGroup key={`color-${index}`}>
            <InputField>
              <Input
                placeholder="Cor"
                value={color.color}
                onChange={(e) => updateColor(index, "color", e.target.value)}
              />
            </InputField>
            <InputField>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
              />
            </InputField>
          </VariationGroup>
        ))}
        <div className="hr"></div>
        <Button className="submit-button" type="button" onClick={handleSubmit}>
          Cadastrar Produto
        </Button>
      </Form>
    </Container>
  );
}

export default CreateProduct;
