import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Produtos from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Noticias from "./pages/News/News";
import Empresa from "./pages/Company/Company";
import Registrar from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Administrator from "./pages/Administrator/Administrator";
import ProfileUser from "./pages/ProfileUser/ProfileUser";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/noticia" element={<Noticias />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meucarrinho" element={<ShoppingCart />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/success" element={<SuccessPage />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <Administrator />
            </PrivateRoute>
          }
        />
        <Route
          path="/meuperfil"
          element={
            <PrivateRoute allowedRoles={["user"]}>
              <ProfileUser />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<h1>Acho que você digitou errado...</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
