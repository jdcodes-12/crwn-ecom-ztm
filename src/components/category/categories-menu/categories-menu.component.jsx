import React from 'react';
import DirectoryItem from '../../directory-item/directory-item.component';
import './categories-menu.styles.scss';
import categories from '../../../data/categories.json';


const CategoriesMenu = () => {
 return (
    <section className="categories-container">
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </section>
 );
}

export default CategoriesMenu;