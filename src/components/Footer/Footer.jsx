import Mapa from "../Mapa/Mapa";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";
import gmail from "../../assets/gmail.svg";
import { Container, List, ContactUs, Contact, Copyright } from "./styles";

function Footer() {
  return (
    <Container>
      <List>
        <ContactUs>
          <h1>Entre em Contato Conosco!</h1>
          <Contact>
            <img src={whatsapp}></img>
            <p>(99) 99999-9999</p>
          </Contact>
          <Contact>
            <img src={instagram}></img>
            <p>claraegemm@</p>
          </Contact>
          <Contact>
            <img src={gmail}></img>
            <p>email@email.com</p>
          </Contact>
        </ContactUs>
        <div id="mapa">{/* <Mapa /> */}</div>
      </List>
      <Copyright>
        <p>Todos os direitos reservados Clara & Gema 2024</p>
      </Copyright>
    </Container>
  );
}

export default Footer;
