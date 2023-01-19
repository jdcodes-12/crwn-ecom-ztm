import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './categories-menu.styles.scss';
import categories from '../../data/categories.json';


const CategoriesMenu = () => {
 return (
    <section className="categories-container">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </section>
 );
}

export default CategoriesMenu;