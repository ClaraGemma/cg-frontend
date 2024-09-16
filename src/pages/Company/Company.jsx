import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";
import { MainContainer, ContentWrapper, Section, Header } from "./styles";

function Empresa() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <MainContainer>
        <ContentWrapper>
          <Section>
            <Header>
              <h1>Quem somos</h1>
              <hr />
            </Header>
            <p>
              Bem-vindo à <b>Clara e Gemma</b>! Somos uma empresa especializada
              na criação de acessórios artesanais em resina, oferecendo uma
              ampla variedade de produtos personalizados, como colares, brincos
              e chaveiros. Cada peça é cuidadosamente feita à mão, com atenção
              aos detalhes e um toque de criatividade, para garantir que você
              tenha algo único e especial.
              <br />
              <br />
              Nosso compromisso é oferecer produtos que sejam não apenas lindos,
              mas também carreguem significado. Sabemos que cada pessoa tem um
              estilo e uma história, por isso, nossos acessórios são totalmente
              personalizáveis, permitindo que você escolha cores, formatos e
              elementos que representem a sua personalidade ou momentos
              especiais de sua vida.
            </p>
          </Section>

          <Section>
            <Header>
              <h1>Motivação</h1>
              <hr />
            </Header>
            <p>
              Na Clara e Gemma, acreditamos que acessórios devem ir além da
              beleza; eles devem contar histórias e criar conexões emocionais.
              Nossa paixão pela resina nos leva a experimentar novas técnicas e
              designs, garantindo inovação constante em nossos produtos.
              <br />
              <br />
              <br />
              Acompanhe-nos nas redes sociais e fique por dentro das nossas
              novidades e lançamentos. Estamos ansiosos para criar algo incrível
              para você!
            </p>
          </Section>
        </ContentWrapper>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Empresa;
