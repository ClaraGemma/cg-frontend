import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai"; // Importando ícones de estrela
import Navbar from "../../components/Navbar/Navbar";
import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";
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
  StarRating,
  Star,
  ReviewList,
  ReviewItem,
} from "./styles";

const ProductDetail = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]); // Estado para armazenar comentários e avaliações
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" }); // Estado para o novo comentário

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar detalhes do produto.");
        }
        const data = await response.json();
        setProduct(data);
        setReviews(data.reviews || []); // Presumindo que os dados do produto incluem avaliações
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
      setNewReview({ rating: 0, comment: "" }); // Resetar o formulário
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <NavbarResponsive
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <Breadcrumbs currentProductName={product.title} />

      <ProductDetailContainer>
        <ProductImage
          src={`http://localhost:3000${product.image_url}`}
          alt={product.title}
        />
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDesc>{product.desc}</ProductDesc>
          <ProductPrice>Preço: ${product.price.toFixed(2)}</ProductPrice>
          <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
        </ProductInfo>
      </ProductDetailContainer>

      {/* Seção de Avaliações */}
      <ReviewsContainer>
        <h2>Avaliações</h2>
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
          <AddToCartButton type="submit">Enviar Avaliação</AddToCartButton>
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
              <p>{review.comment}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      </ReviewsContainer>
      <Footer />
    </>
  );
};

export default ProductDetail;
