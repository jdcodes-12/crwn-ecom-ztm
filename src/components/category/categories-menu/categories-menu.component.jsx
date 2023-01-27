import React from 'react';
import DirectoryItem from '../../directory-item/directory-item.component';
import categories from '../../../data/categories.json';
import { CategoriesMenuContainer } from './categories-menu.styles';

const CategoriesMenu = () => {
 return (
    <CategoriesMenuContainer as='section'>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </CategoriesMenuContainer>
 );
}

export default CategoriesMenu;