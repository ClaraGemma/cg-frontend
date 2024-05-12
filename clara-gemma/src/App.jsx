import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Produtos from "./pages/Products/Products";
import Noticias from "./pages/News/News";
import Empresa from "./pages/Company/Company";
// import maps from './components/Map/Map';

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
        <Route path="*" element={<h1>Not Found mané</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
