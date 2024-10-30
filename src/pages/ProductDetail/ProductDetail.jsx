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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar detalhes do produto.");
        }
        const data = await response.json();
        setProduct(data);
        setReviews(data.reviews || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating > 0 && newReview.comment) {
      setReviews((prev) => [...prev, newReview]);
      setNewReview({ rating: 0, comment: "" });
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
          src={`http://localhost:3000${product.image_url}`}
          alt={product.title}
        />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDesc>{product.desc}</ProductDesc>
          <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
          <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
        </ProductInfo>
      </ProductDetailContainer>

      <ReviewsContainer>
        <h2 style={{ fontFamily: "Livvic" }}>Deixe sua avaliação</h2>{" "}
        {/* Estilizando título com Livvic */}
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
          {reviews.map((review, index) => (
            <ReviewItem key={index}>
              <StarRating>
                {[1, 2, 3, 4, 5].map((star) => (
                  <AiFillStar
                    key={star}
                    color={review.rating >= star ? "#ffcc00" : "#ccc"}
                  />
                ))}
              </StarRating>
              <p style={{ fontFamily: "Poppins", marginTop: "8px" }}>
                {review.comment}
              </p>{" "}
              {/* Texto da avaliação em Poppins */}
            </ReviewItem>
          ))}
        </ReviewList>
      </ReviewsContainer>

      <Footer />
    </>
  );
};

export default ProductDetail;
