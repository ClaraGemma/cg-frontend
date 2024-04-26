import { Link, useLocation } from "react-router-dom";
import { Container, List, Item } from "./styles";

function Navbar() {
  const location = useLocation();

  return (
    <Container>
      <List>
        <Item>
          <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </Item>
        <Item>
          <Link
            to={"/produto"}
            className={location.pathname === "/produto" ? "active" : ""}
          >
            Produtos
          </Link>
        </Item>
        <Item>
          <Link
            to={"/noticia"}
            className={location.pathname === "/noticia" ? "active" : ""}
          >
            Notícias
          </Link>
        </Item>
        <Item>
          <Link
            to={"/empresa"}
            className={location.pathname === "/empresa" ? "active" : ""}
          >
            Empresa
          </Link>
        </Item>
      </List>
    </Container>
  );
}

export default Navbar;
