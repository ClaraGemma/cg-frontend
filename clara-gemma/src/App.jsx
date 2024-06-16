import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Produtos from "./pages/Products/Products";
import Noticias from "./pages/News/News";
import Empresa from "./pages/Company/Company";
import Login from "./pages/Login/Login";
import Administrator from "./pages/Administrator/Administrator";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produto" element={<Produtos />} />
        <Route path="/noticia" element={<Noticias />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/administrador" element={<Administrator />} />
        <Route path="*" element={<h1>Not Found mané</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
