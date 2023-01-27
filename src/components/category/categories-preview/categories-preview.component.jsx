import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoryIsLoading } from '../../../store/categories/categories.selectors';

import CategoryPreview from '../category-preview/category-preview.component';
import Spinner from '../../spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);

  return (
    <>
      { isLoading ? 
        (<Spinner/>) : (
            Object.keys(categoriesMap).map(title => 
              <CategoryPreview key={title} title={title} products={categoriesMap[title]} />  
            )
          )
      }
    </>
  );
}

export default CategoriesPreview;