import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo_navbar.svg";
import {
  Container,
  List,
  Logo,
  NavItems,
  Item,
  ButtonContainer,
  Button,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from "./styles";

function Navbar() {
  const location = useLocation();
  const [userName, setUserName] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name);
  }, []);

  const handleDropdownToggle = () => setIsDropdownVisible(!isDropdownVisible);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUserName(null);
  };

  return (
    <Container>
      <List>
        <Logo>
          <Link to="/home">
            <img src={logo} alt="Cost" />
          </Link>
        </Logo>
        <NavItems>
          <Item>
            <Link
              to="/home"
              className={location.pathname === "/home" ? "active" : ""}
            >
              Home
            </Link>
          </Item>
          <Item>
            <Link
              to="/produtos"
              className={location.pathname === "/produtos" ? "active" : ""}
            >
              Produtos
            </Link>
          </Item>
          <Item>
            <Link
              to="/noticia"
              className={location.pathname === "/noticia" ? "active" : ""}
            >
              Notícias
            </Link>
          </Item>
          <Item>
            <Link
              to="/empresa"
              className={location.pathname === "/empresa" ? "active" : ""}
            >
              Empresa
            </Link>
          </Item>
        </NavItems>
        <ButtonContainer>
          {userName ? (
            <Dropdown>
              <DropdownButton onClick={handleDropdownToggle}>
                {userName}
              </DropdownButton>
              {isDropdownVisible && (
                <DropdownMenu>
                  <DropdownItem>
                    <Link to="/meucarrinho">Meu carrinho</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/meuspedidos">Meus pedidos</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/meuperfil">Meu perfil</Link>
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
                <Link to="/registrar">Registrar-se</Link>
              </Button>
              <Button>
                <Link to="/login">Entrar</Link>
              </Button>
            </>
          )}
        </ButtonContainer>
      </List>
    </Container>
  );
}
export default Navbar;
