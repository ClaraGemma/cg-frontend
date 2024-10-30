import Navbar from "../../components/Navbar/Navbar";
import PostItem from "../../components/PostItem/PostItem";
import Footer from "../../components/Footer/Footer";
import { Container } from "./styles";

function News() {
  return (
    <>
      <Navbar />
      <Container>
        <PostItem />
      </Container>
      <Footer />
    </>
  );
}

export default News;
