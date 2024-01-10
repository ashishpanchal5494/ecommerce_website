import React from "react";
import styled from "styled-components";
import FilterSection from "./Components/FilterSection";
import Short from "./Short";
import ProductList from "./Components/ProductList";



const Products = () => {


 

  return <Wrapper>
     <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Short />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
  </Wrapper>;
};

const Wrapper = styled.section`
height: 100%;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;