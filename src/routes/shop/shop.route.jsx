import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/cards/product-card/product-card.component';
import './shop.styles.scss';

const ShopRoute = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {
        Object.keys(categoriesMap).map(title => 
          <section key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {
                categoriesMap[title].map(product => 
                  <ProductCard key={product.id} product={product}/>
                )
              }
            </div>
          </section>
        )
      }   
    </>
  );
}

export default ShopRoute;