import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";
import img_01 from "../../assets/img_01.svg";
import img_02 from "../../assets/img_02.svg";
import img_03 from "../../assets/img_03.svg";
import img_04 from "../../assets/img_04.svg";
import img_05 from "../../assets/img_05.svg";
import {
  Container,
  Banner,
  Box01,
  Box02,
  Box03,
  TextContainer,
  Image,
} from "./styles";

function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <Container>
        <Banner>
          <h1>Clara & Gemma</h1>
          <h2>arte e resina</h2>
        </Banner>

        <Box01>
          <TextContainer>
            <h1>O Que é Arte em Resina?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </TextContainer>
          <Image src={img_01} alt="Exemplo de resina em trabalho concluído" />
        </Box01>

        <Box02>
          <Image src={img_02} alt="Exemplo de resina em trabalho concluído" />
          <TextContainer>
            <h1>Resina Epoxí?testestes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
          </TextContainer>
        </Box02>

        <Box03>
          <TextContainer>
            <h1>Confira Alguns Trabalhos</h1>
          </TextContainer>
          <div>
            <Image src={img_03} alt="Exemplo de resina em trabalho concluído" />
            <Image src={img_04} alt="Exemplo de resina em trabalho concluído" />
            <Image src={img_05} alt="Exemplo de resina em trabalho concluído" />
          </div>
        </Box03>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
