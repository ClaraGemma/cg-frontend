// import Mapa from '../Mapa/Mapa';
import "./style.css"; // dps matheus vai atualizar o import do css

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div>
          <p className="copyright-text">
            Copyright Clara-Gemma - 2024. Todos os direitos reservados.
          </p>
        </div>
        <div>
          <img src="ccaminho do logo" alt="Logo" className="footer-logo" />
        </div>
      </div>
      {/* <Mapa></Mapa> */}
    </footer>
  );
}

export default Footer;
