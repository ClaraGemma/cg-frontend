import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo_navbar.svg";
import { FaBars } from "react-icons/fa";
import {
  Container,
  List,
  Item,
  Logo,
  Box,
  ButtonContainer,
  Button,
  More,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from "./styles";

function Navbar({ setMenuIsVisible }) {
  const location = useLocation();
  const [userName, setUserName] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    // Recupera o nome do usuário do localStorage
    const name = localStorage.getItem("userName");
    setUserName(name);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
  };

  return (
    <Container>
      <List>
        <Logo className="logo1">
          <Link to={"/home"}>
            <img src={logo} alt="Cost" />
          </Link>
        </Logo>
        <Box>
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
        </Box>

        <ButtonContainer>
          {userName ? (
            <Dropdown>
              <DropdownButton onClick={handleDropdownToggle}>
                {userName}
              </DropdownButton>
              {isDropdownVisible && (
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/meuperfil">Meu perfil</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/meucarrinho">Meu carrinho</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <button onClick={handleLogout}>Sair</button>
                  </DropdownItem>
                </DropdownMenu>
              )}
            </Dropdown>
          ) : (
            <>
              <Button>
                <Link to={"/registrar"}>Registrar-se</Link>
              </Button>
              <Button>
                <Link to={"/login"}>Entrar</Link>
              </Button>
            </>
          )}
        </ButtonContainer>

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
