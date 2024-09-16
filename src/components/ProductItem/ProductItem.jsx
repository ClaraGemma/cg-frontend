import PropTypes from "prop-types";
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

function ProductItem({ products, showAddToCart, showDeleteButton }) {
  if (!products || products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage
            src={`http://localhost:3000${product.image_url}`}
            alt={product.title}
          />
          <ProductInfo>
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
            </div>
            <ProductPriceContainer>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <div>
                {showAddToCart && (
                  <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
                )}
                {showDeleteButton && <DeleteButton>Deletar</DeleteButton>}
              </div>
            </ProductPriceContainer>
          </ProductInfo>
        </ProductCard>
      ))}
    </>
  );
}

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

ProductItem.defaultProps = {
  showAddToCart: true,
  showDeleteButton: false,
};

export default ProductItem;
