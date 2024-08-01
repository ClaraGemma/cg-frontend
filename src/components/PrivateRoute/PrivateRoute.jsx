import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // Verifica se há um token no armazenamento local
  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children;
}

export default PrivateRoute;
