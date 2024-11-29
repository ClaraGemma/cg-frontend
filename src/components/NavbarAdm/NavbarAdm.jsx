import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_navbar.svg";
import {
  Container,
  Nav,
  Box,
  Logo,
  NavItems,
  Item,
  StyledIoExit,
} from "./styles";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/admin">
            <img src={logo} alt="Cost" />
          </Link>
        </Logo>
        <NavItems>
          <Item>
            <Link
              to="/produtosadm"
              className={location.pathname === "/produtosadm" ? "active" : ""}
            >
              Produtos
            </Link>
          </Item>
          <Item>
            <Link
              to="/noticiasadm"
              className={location.pathname === "/noticiasadm" ? "active" : ""}
            >
              Notícias
            </Link>
          </Item>
          <Item>
            <Link
              to="/pedidosadm"
              className={location.pathname === "/pedidosadm" ? "active" : ""}
            >
              Pedidos
            </Link>
          </Item>
        </NavItems>
        <Box>
          <h1>Olá, Richard</h1>
          <StyledIoExit onClick={handleLogout} />
        </Box>
      </Nav>
    </Container>
  );
}
export default Navbar;
