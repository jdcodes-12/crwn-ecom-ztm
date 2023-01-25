import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../../store/cart/cart.actions';
import { selectCartItems } from '../../../store/cart/cart.selectors';

import Button, { BUTTON_TYPE } from '../../buttons/button.component';

import { 
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';


const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProduct = () => 
    dispatch(addProductToCart(cartItems, product));
  
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