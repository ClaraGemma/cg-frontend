import { Link, useLocation } from "react-router-dom";
import { Container, List, Item } from "./styles";
import logo from "../../assets/testlogo.png";

function Navbar() {
  const location = useLocation();

  return (
    <Container>
      <List>
        <Item className="logo1">
          <Link to = {"/"} >        
          <img src={logo} alt="Cost" /></Link>
        </Item>
        <Item>
          <Link to={"/home"} className={location.pathname === "/home" ? "active" : ""}>
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


