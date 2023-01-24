import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import Button, { BUTTON_TYPE } from '../../buttons/button.component';

import { 
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addProductToCart } = useContext(CartContext);
  
  const addProduct = () => addProductToCart(product);
  
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addProduct}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
}

export default ProductCard;