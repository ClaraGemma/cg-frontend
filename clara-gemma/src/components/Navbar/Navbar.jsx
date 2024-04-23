import { Link, useLocation } from "react-router-dom";

import "./style.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="list">
        <li className="item">
          <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li className="item">
          <Link
            to={"/produto"}
            className={location.pathname === "/produto" ? "active" : ""}
          >
            Produtos
          </Link>
        </li>
        <li className="item">
          <Link
            to={"/noticia"}
            className={location.pathname === "/noticia" ? "active" : ""}
          >
            Notícias
          </Link>
        </li>
        <li className="item">
          <Link
            to={"/empresa"}
            className={location.pathname === "/empresa" ? "active" : ""}
          >
            Empresa
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
