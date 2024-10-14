import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPriceContainer,
  ProductPrice,
  AddToCartButton,
  DeleteButton,
  ProductDesc,
} from "./styles";

const ProductItem = ({
  products,
  showAddToCart = true,
  showDeleteButton = false,
}) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  const handleAddToCart = async (productId) => {
    console.log("Adicionando produto com ID:", productId);
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Usuário não está autenticado.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao adicionar ao carrinho.");
      }

      alert(data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleNavigateToProduct = (productId) => {
    navigate(`/produto/${productId}`);
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage
            src={`http://localhost:3000${product.image_url}`}
            alt={product.title}
          />
          <ProductInfo>
            <div>
              <ProductTitle onClick={() => handleNavigateToProduct(product.id)}>
                {product.title}
              </ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
            </div>
            <ProductPriceContainer>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <div>
                {showAddToCart && (
                  <AddToCartButton onClick={() => handleAddToCart(product.id)}>
                    Adicionar ao Carrinho
                  </AddToCartButton>
                )}
                {showDeleteButton && <DeleteButton>Deletar</DeleteButton>}
              </div>
            </ProductPriceContainer>
          </ProductInfo>
        </ProductCard>
      ))}
    </>
  );
};

// Validação das props com PropTypes
ProductItem.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  showAddToCart: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
};

export default ProductItem;
