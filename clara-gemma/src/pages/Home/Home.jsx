import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";
// import Map from "../../components/maps/Map";

function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <h1>sessaaaaaaaaaaaaaaao</h1>
      {/* <Map></Map> */}
      <Footer />
    </>
  );
}

export default Home;
