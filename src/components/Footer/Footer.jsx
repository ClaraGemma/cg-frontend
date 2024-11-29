import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa"; // Importando os ícones
import {
  Container,
  List,
  ContactUs,
  Contact,
  MapContainer,
  Copyright,
} from "./styles";

function Footer() {
  return (
    <Container>
      <List>
        <ContactUs>
          <h1>Entre em Contato Conosco!</h1>
          <Contact>
            <FaWhatsapp style={{ marginRight: "0.5rem" }} />
            <p>(13) 99786-2433</p>
          </Contact>
          <Contact>
            <FaInstagram style={{ marginRight: "0.5rem" }} />
            <a
              href="https://www.instagram.com/claragemma001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              claragemma001
            </a>
          </Contact>
          <Contact>
            <FaEnvelope style={{ marginRight: "0.5rem" }} />
            <p>claragemma@email.com</p>
          </Contact>
        </ContactUs>
        <MapContainer>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4491.655708585917!2d-46.326383899999996!3d-23.9426566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce024465fa95bf%3A0x1e411e16e8228ce3!2sFatec%20Baixada%20Santista%20-%20Faculdade%20de%20Tecnologia%20-%20Rubens%20Lara!5e1!3m2!1spt-BR!2sbr!4v1730249401483!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </List>
      <Copyright>
        <p>Todos os direitos reservados Clara & Gema 2024</p>
      </Copyright>
    </Container>
  );
}

export default Footer;
