import { ImBin2 } from "react-icons/im";
import { Button, Container, Image, TextBox } from "./styles";
function Product() {
  return (
    <Container>
      <Image />
      <TextBox>
        <h1>Chaveiro Cruz/Borboleta</h1>
        <p>
          Chaveiro com extensório em cor dourada acompanhado de uma cruz em
          glitter com palavra personalizada, além de uma borboleta com glitter
          também.
        </p>
      </TextBox>
      <Button>
        <ImBin2 />
      </Button>
    </Container>
  );
}

export default Product;
