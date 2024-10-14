import { Navigate } from "react-router-dom";

function PrivateRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Pegue a role do usuário armazenada ao fazer login.

  if (!token) {
    return <Navigate to="/login" />;
  }

  // Verifica se o usuário tem permissão para acessar a página
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
}

export default PrivateRoute;
