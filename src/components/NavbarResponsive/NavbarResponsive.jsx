import PropTypes from "prop-types";
import { Container } from "./styles";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarResponsive({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container $isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <Link
          to={"/home"}
          className={location.pathname === "/home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to={"/produto"}
          className={location.pathname === "/produto" ? "active" : ""}
        >
          Produtos
        </Link>
        <Link
          to={"/noticia"}
          className={location.pathname === "/noticia" ? "active" : ""}
        >
          Notícias
        </Link>
        <Link
          to={"/empresa"}
          className={location.pathname === "/empresa" ? "active" : ""}
        >
          Empresa
        </Link>
      </nav>
    </Container>
  );
}

NavbarResponsive.propTypes = {
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.func.isRequired,
};

export default NavbarResponsive;
