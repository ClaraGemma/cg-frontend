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
  ReviewerName,
} from "./styles";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  useEffect(() => {
    // Verifica se o nome do usuário foi salvo no localStorage
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
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Token do usuário logado
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
        setReviews((prev) => [...prev, { ...savedReview, userName }]); // Adiciona a nova avaliação
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
          {reviews.map((review, index) => (
            <ReviewItem key={index}>
              <ReviewerName>{review.userName}</ReviewerName>
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
              </p>
            </ReviewItem>
          ))}
        </ReviewList>
      </ReviewsContainer>

      <Footer />
    </>
  );
};

export default ProductDetail;
