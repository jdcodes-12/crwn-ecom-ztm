import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoryIsLoading } from '../../store/categories/categories.selectors';

import ProductCard from '../../components/cards/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  Title,
  CategoryContainer,
} from './category.styles';

const CategoryRoute = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {
        isLoading ? 
          ( <Spinner/> ) : (
              <CategoryContainer>
                { products &&
                      products.map(product => 
                        <ProductCard key={product.id} product={product} />
                      )
                }
              </CategoryContainer>
            )
      }
    </>
  );
}

export default CategoryRoute;