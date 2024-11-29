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
import OrdersUser from "./pages/OrdersUser/OrdersUser";
import OrderAdm from "./pages/OrdersAdm/OrdersAdm";
import NewsAdm from "./pages/NewsAdm/NewsAdm";
import ProductAdm from "./pages/ProductsAdm/ProductAdm";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import AddressForm from "./pages/AddressForm/AddressForm";
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
        <Route path="/meuspedidos" element={<OrdersUser />} />
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="/endereco" element={<AddressForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/pedidosadm" element={<OrderAdm />} />
        <Route path="/noticiasadm" element={<NewsAdm />} />
        <Route path="/produtosadm" element={<ProductAdm />} />

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
