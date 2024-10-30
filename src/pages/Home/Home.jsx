import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container, Banner, Button, TextContainer } from "./styles";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/produtos"); // Redirecionar para a página de produtos
  };

  return (
    <>
      <Navbar />
      <Container>
        <Banner>
          <TextContainer>
            <h1>Clara & Gemma</h1>
            <h2>Arte e Resina</h2>
            <p>
              Bem-vindo à Clara & Gemma! Descubra a beleza dos acessórios
              artesanais em resina, feitos com amor e dedicação.
            </p>
            <Button onClick={handleButtonClick}>
              Veja os nossos produtos!
            </Button>
          </TextContainer>
        </Banner>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
