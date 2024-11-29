import { useEffect, useState } from "react";
import ModalBase from "../../components/Modals/ModalBase/ModalBase";
import CreateProduct from "../../components/Modals/CreateProduct/CreateProduct";
import NavbarAdm from "../../components/NavbarAdm/NavbarAdm";
import ProductItem from "../../components/ProductItem/ProductItem";
import {
  Header,
  StyledIoAddCircle,
  Button,
  Pagination,
  PaginationButton,
  ProductItemContainer,
  TitlePanel,
  Container,
} from "./styles";

function ProductAdm() {
  const [openModalPr, setOpenModalPr] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

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
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <>
      <NavbarAdm />
      <Container>
        <Header>
          <TitlePanel>Painel de Produtos</TitlePanel>
          <Button onClick={() => setOpenModalPr(true)}>
            <p>Novo Produto</p>
            <StyledIoAddCircle />
          </Button>
          <ModalBase
            isOpen={openModalPr}
            setOpenModal={() => setOpenModalPr(!openModalPr)}
          >
            <CreateProduct />
          </ModalBase>
        </Header>
        <ProductItemContainer>
          <ProductItem
            products={products}
            showAddToCart={false}
            showDeleteButton={true}
          />
        </ProductItemContainer>

        {/* Paginação */}
        <Pagination>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationButton
              key={index + 1}
              onClick={() => fetchProducts(index + 1)}
              $active={index + 1 === currentPage}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </Pagination>
      </Container>
    </>
  );
}

export default ProductAdm;
