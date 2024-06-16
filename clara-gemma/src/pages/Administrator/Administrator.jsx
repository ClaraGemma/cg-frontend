import {
  Box,
  BoxPanel,
  Button,
  Container,
  Logo,
  Nav,
  StyledIoAddCircle,
  StyledIoExit,
} from "./styles.js";
import logo from "../../assets/logo_navbar.svg";
import "./styles.js";

function Administrator() {
  return (
    <Container>
      <Nav>
        <Box>
          <Logo>
            <img src={logo} />
          </Logo>
          <h1>Área do Administrador</h1>
        </Box>
        <Box>
          <h1>Olá, Richard</h1>
          <StyledIoExit />
        </Box>
      </Nav>
      <BoxPanel>
        <h1>Painel de Notícias</h1>
        <Button>
          <p>Nova Postagem</p>
          <StyledIoAddCircle />
        </Button>
      </BoxPanel>
      <BoxPanel>
        <h1>Painel de Produtos</h1>
        <Button>
          <p>Novo Produto</p>
          <StyledIoAddCircle />
        </Button>
      </BoxPanel>
    </Container>
  );
}

export default Administrator;
