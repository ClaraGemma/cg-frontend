import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
import Footer from "../../components/Footer/Footer";

function Empresa() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <div className="oloko">
        <h1>Quem somos</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="">
        <h1>Motivação</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Empresa;
