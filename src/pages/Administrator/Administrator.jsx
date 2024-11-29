import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarAdm from "../../components/NavbarAdm/NavbarAdm.jsx";
import {
  DashboardContainer,
  DashboardStats,
  StatCard,
  Description,
} from "./styles";

function Administrator() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    usuarios: 0,
    produtos: 0,
    noticias: 0,
    pedidos: 0,
  });

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch("http://localhost:3000/api/check-admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (data.isAdmin) {
          setIsAdmin(true);
          fetchDashboardData();
        } else {
          navigate("/"); // Redirecionar para página inicial
        }
      } catch (error) {
        console.error("Erro ao verificar administrador:", error);
        navigate("/login");
      }
    };

    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      try {
        const responses = await Promise.all([
          fetch("http://localhost:3000/api/usuarios/contagem", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch("http://localhost:3000/api/produtos/contagem", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch("http://localhost:3000/api/noticias/contagem", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch("http://localhost:3000/api/pedidos/contagem", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        const [usuarios, produtos, noticias, pedidos] = await Promise.all(
          responses.map((res) => res.json())
        );

        setDashboardData({
          usuarios: usuarios.count,
          produtos: produtos.count,
          noticias: noticias.count,
          pedidos: pedidos.count,
        });
      } catch (error) {
        console.error("Erro ao carregar dados do dashboard:", error);
      }
    };

    checkAdmin();
  }, [navigate]);

  if (!isAdmin) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <NavbarAdm />
      <DashboardContainer>
        <h2>Dashboard</h2>
        <Description>
          Aqui você pode visualizar as principais estatísticas da plataforma,
          como a quantidade de <strong>usuários cadastrados</strong>,{" "}
          <strong>produtos</strong>, <strong>notícias</strong> e{" "}
          <strong>pedidos realizados</strong>.
        </Description>
        <DashboardStats>
          <StatCard>
            <h3>Usuários Cadastrados</h3>
            <p>{dashboardData.usuarios}</p>
          </StatCard>
          <StatCard>
            <h3>Produtos Cadastrados</h3>
            <p>{dashboardData.produtos}</p>
          </StatCard>
          <StatCard>
            <h3>Notícias Publicadas</h3>
            <p>{dashboardData.noticias}</p>
          </StatCard>
          <StatCard>
            <h3>Pedidos Realizados</h3>
            <p>{dashboardData.pedidos}</p>
          </StatCard>
        </DashboardStats>
      </DashboardContainer>
    </>
  );
}

export default Administrator;
