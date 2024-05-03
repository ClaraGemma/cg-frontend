import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";

function Produtos() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <h1>catalogo</h1>
      <Footer />
    </>
  );
}

export default Produtos;
