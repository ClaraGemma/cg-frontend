import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import vermelha from "../../assets/vermelha.webp";
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
  filterQuery = "",
}) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setProductList(filteredProducts);
  }, [products, filterQuery]);

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

  const handleDeleteProduct = async (productId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Usuário não está autenticado.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao deletar produto.");
      }
      if (response.ok) {
        setProductList(
          productList.filter((product) => product.id !== productId)
        );
      }
      alert(data.message);
    } catch (error) {
      setError(error.message);
    }
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {productList.map((product) => {
        const imageUrl = product.defaultImage
          ? `http://localhost:3000${product.defaultImage}` // Usar a URL enviada pelo backend
          : vermelha; // Placeholder caso não tenha imagem

        const price = 7; // Usar o preço enviado pelo backend ou 0 como fallback

        return (
          <ProductCard key={product.id}>
            <ProductImage
              src={imageUrl}
              alt={product.title}
              onClick={() => handleNavigateToProduct(product.id)}
            />
            <ProductInfo>
              <div>
                <ProductTitle
                  onClick={() => handleNavigateToProduct(product.id)}
                >
                  {product.title}
                </ProductTitle>
                <ProductDesc>
                  {product.desc.length > 100
                    ? `${product.desc.substring(0, 100)}...`
                    : product.desc}
                </ProductDesc>
              </div>
              <ProductPriceContainer>
                <ProductPrice>R$ {price.toFixed(2)}</ProductPrice>
                <div>
                  {showAddToCart && (
                    <AddToCartButton
                      onClick={() => handleAddToCart(product.id)}
                    >
                      Adicionar ao Carrinho
                    </AddToCartButton>
                  )}
                  {showDeleteButton && (
                    <DeleteButton
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Deletar
                    </DeleteButton>
                  )}
                </div>
              </ProductPriceContainer>
            </ProductInfo>
          </ProductCard>
        );
      })}
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
      variations: PropTypes.arrayOf(
        PropTypes.shape({
          image_url: PropTypes.string,
          price: PropTypes.number,
        })
      ),
    })
  ).isRequired,
  showAddToCart: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
  filterQuery: PropTypes.string,
};

export default ProductItem;
