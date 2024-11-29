import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";

import {
  ProductDetailContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  AddToCartButton,
  ColorOptions,
  SizeOptions,
  OptionButton,
  QuantityOptions,
  ReviewsContainer,
  ReviewForm,
  ReviewInput,
  AddRatingButton,
  StarRating,
  Star,
  ReviewList,
  ReviewItem,
} from "./styles";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    const fetchProductDetails = async () => {
      try {
        const productResponse = await fetch(
          `http://localhost:3000/product/${id}`
        );
        const reviewResponse = await fetch(
          `http://localhost:3000/products/${id}/reviews`
        );

        if (!productResponse.ok || !reviewResponse.ok) {
          throw new Error("Erro ao buscar detalhes do produto.");
        }

        const productData = await productResponse.json();
        const reviewsData = await reviewResponse.json();

        setProduct(productData);
        setReviews(reviewsData);
        setSelectedColor(productData.colors[0]?.color);
        setSelectedSize(productData.sizes[0]?.size);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        body: JSON.stringify({
          productId,
          quantity: selectedQuantity,
          color: selectedColor,
          size: selectedSize,
        }),
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

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (newReview.rating > 0 && newReview.comment) {
      try {
        const response = await fetch(
          `http://localhost:3000/products/${id}/reviews`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              rating: newReview.rating,
              comment: newReview.comment,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao enviar avaliação.");
        }

        const savedReview = await response.json();
        setReviews((prev) => [...prev, { ...savedReview, userName }]);
        setNewReview({ rating: 0, comment: "" });
      } catch (error) {
        setError("Erro ao enviar avaliação.");
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <Navbar />
      <Breadcrumbs currentProductName={product.title} />

      <ProductDetailContainer>
        <ProductImage
          src={`http://localhost:3000${
            product.colors.find((color) => color.color === selectedColor)
              ?.image_url || product.image_url
          }`}
          alt={product.title}
        />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDesc>{product.desc}</ProductDesc>

          {/* Preço Dinâmico com base no tamanho selecionado */}
          <ProductPrice>
            R${" "}
            {product.sizes
              .find((size) => size.size === selectedSize)
              ?.price.toFixed(2)}
            <span className="unit-text">(por unidade)</span>
          </ProductPrice>

          {/* Seleção de Cor */}
          <ColorOptions>
            <p>Cor:</p>
            {product.colors.map((color) => (
              <OptionButton
                key={color.color}
                selected={selectedColor === color.color}
                onClick={() => setSelectedColor(color.color)}
              >
                {color.color}
              </OptionButton>
            ))}
          </ColorOptions>

          {/* Seleção de Tamanho */}
          <SizeOptions>
            <p>Tamanho:</p>
            {product.sizes.map((size) => (
              <OptionButton
                key={size.size}
                selected={selectedSize === size.size}
                onClick={() => setSelectedSize(size.size)}
              >
                {size.size}
              </OptionButton>
            ))}
          </SizeOptions>

          {/* Seleção de Quantidade */}
          <QuantityOptions>
            <p>Quantidade:</p>
            <select
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </QuantityOptions>

          <AddToCartButton onClick={() => handleAddToCart(product.id)}>
            Adicionar ao Carrinho
          </AddToCartButton>
        </ProductInfo>
      </ProductDetailContainer>

      <ReviewsContainer>
        <h2 style={{ fontFamily: "Livvic" }}>Deixe sua avaliação</h2>
        <ReviewForm onSubmit={handleReviewSubmit}>
          <StarRating>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setNewReview({ ...newReview, rating: star })}
              >
                <AiFillStar
                  color={newReview.rating >= star ? "#ffcc00" : "#ccc"}
                />
              </Star>
            ))}
          </StarRating>
          <ReviewInput
            name="comment"
            placeholder="Deixe um comentário..."
            value={newReview.comment}
            onChange={handleReviewChange}
          />
          <AddRatingButton type="submit">Enviar Avaliação</AddRatingButton>
        </ReviewForm>
        <ReviewList>
          {reviews.map((review, idx) => (
            <ReviewItem key={idx}>
              <StarRating>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star}>
                    <AiFillStar
                      color={review.rating >= star ? "#ffcc00" : "#ccc"}
                    />
                  </Star>
                ))}
              </StarRating>
              <div>{review.comment}</div>
            </ReviewItem>
          ))}
        </ReviewList>
      </ReviewsContainer>

      <Footer />
    </>
  );
};

export default ProductDetail;
