import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductItem from "../../components/ProductItem/ProductItem";
import {
  SearchBar,
  SearchInput,
  SearchIconWrapper,
  ProductItemContainer,
  Pagination,
  PaginationButton,
} from "./styles";
import { FaSearch } from "react-icons/fa";
import api from "../../services/api";

function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (page = 1) => {
    try {
      const params = searchQuery ? { query: searchQuery, page } : { page };
      const response = await api.get(`/products/search`, { params });
      setFilteredProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const fetchProducts = async (page) => {
    try {
      const response = await fetch(`http://localhost:3000/products`);
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    handleSearch();
    fetchProducts();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(currentPage);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handleSearch(page);
  };

  return (
    <>
      <Navbar />
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Pesquisar produtos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SearchIconWrapper onClick={() => handleSearch(currentPage)}>
          <FaSearch />
        </SearchIconWrapper>
      </SearchBar>
      <ProductItemContainer>
        <ProductItem
          products={searchQuery ? filteredProducts : products}
          filterQuery={searchQuery}
        />
      </ProductItemContainer>
      <Pagination>
        {[...Array(totalPages).keys()].map((page) => (
          <PaginationButton
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            $active={page + 1 === currentPage}
          >
            {page + 1}
          </PaginationButton>
        ))}
      </Pagination>
      <Footer />
    </>
  );
}

export default Products;
