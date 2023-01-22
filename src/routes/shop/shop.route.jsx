import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/cards/product-card/product-card.component';
import './shop.styles.scss';

const ShopRoute = () => {
  const { products } = useContext(ProductsContext);
  
  return (
    <div className="products-container">
    {
      products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))
    }
    </div>
  );
}

export default ShopRoute;