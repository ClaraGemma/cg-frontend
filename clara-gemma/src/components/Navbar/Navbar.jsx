import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, List, Item, Logo, Name, More } from "./styles";
import logo from "../../assets/testlogo.png";
import { FaBars } from "react-icons/fa";

function Navbar({ setMenuIsVisible }) {
  const location = useLocation();

  return (
    <Container>
      <List>
        <Logo className="logo1">
          <Link to={"/home"}>
            <img src={logo} alt="Cost" />
          </Link>
        </Logo>
        <Name>
          <Link to={"/home"}>CLARA && GEMMA</Link>
        </Name>
        <Item>
          <Link
            to={"/home"}
            className={location.pathname === "/home" ? "active" : ""}
          >
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
        <More>
          <FaBars onClick={() => setMenuIsVisible(true)} />
        </More>
      </List>
    </Container>
  );
}

Navbar.propTypes = {
  setMenuIsVisible: PropTypes.func.isRequired,
};

export default Navbar;
