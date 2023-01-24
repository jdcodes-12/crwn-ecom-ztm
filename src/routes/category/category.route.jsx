import React, { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/cards/product-card/product-card.component';
import './category.styles.scss';

const CategoryRoute = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2>{category.toUpperCase()}</h2>
      <div className="category-container">
      { products &&
            products.map(product => 
              <ProductCard key={product.id} product={product} />
            )
      }
      </div>
    </>
  );
}

export default CategoryRoute;