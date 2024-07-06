import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import PostItem from "../../components/PostItem/PostItem";
import Footer from "../../components/Footer/Footer";

function Noticias() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />

      <PostItem></PostItem>
      <Footer />
    </>
  );
}

export default Noticias;
