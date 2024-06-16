import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";

function Produtos() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <Product />
      <Footer />
    </>
  );
}

export default Produtos;
