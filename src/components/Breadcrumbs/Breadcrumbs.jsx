import PropTypes from "prop-types";
import { BreadcrumbsContainer, BreadcrumbLink } from "./styles.js";

const Breadcrumbs = ({ currentProductName }) => {
  return (
    <BreadcrumbsContainer>
      <BreadcrumbLink to="/produtos">Produtos</BreadcrumbLink>
      <span>{currentProductName}</span>
    </BreadcrumbsContainer>
  );
};

Breadcrumbs.propTypes = {
  currentProductName: PropTypes.string.isRequired,
};

export default Breadcrumbs;
