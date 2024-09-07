import { useEffect, useState } from "react";
import { ImBin2 } from "react-icons/im";
import { Button, Container, Image, TextBox } from "./styles";

import api from "../../services/api";

function ProductItem() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const productsFromApi = await api.get("/products");
    setProducts(productsFromApi.data);
  }

  async function deleteProducts(id) {
    await api.delete(`/products/${id}`);
    getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <Container key={product.id}>
          <Image
            src={`http://localhost:3000${product.image_url}`}
            alt={product.title}
          />
          <TextBox>
            <h1>{product.title}</h1>
            <span>{new Date(product.date_time).toLocaleString()}</span>
            <p>{product.desc}</p>
            <p>{product.price}</p>
          </TextBox>
          <Button onClick={() => deleteProducts(product.id)}>
            <ImBin2 />
          </Button>
        </Container>
      ))}
    </>
  );
}

export default ProductItem;
