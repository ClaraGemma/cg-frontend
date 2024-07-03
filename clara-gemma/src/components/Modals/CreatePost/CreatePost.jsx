import { Container, Form, InputField, Input, TextArea } from "./styles.js";

function CreatePost() {
  return (
    <Container>
      <Form>
        <h1>Nova Postagem</h1>
        <InputField>
          <Input type="text" placeholder="Título" required />
        </InputField>

        <InputField>
          <TextArea placeholder="Descrição" required />
        </InputField>

        <InputField>
          <Input type="file" id="image" name="image" accept="image/*" />
        </InputField>

        <button>Confirmar</button>
        <button>Cancelar</button>
      </Form>
    </Container>
  );
}

export default CreatePost;
