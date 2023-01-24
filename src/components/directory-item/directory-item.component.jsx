import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DirectoryItemContainer,
  BackgroundImageContainer,
  Body,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl, route } = category;

  const navigate = useNavigate();
  const goToRoute = () => navigate(route);


  return (
    <DirectoryItemContainer as='article' key={id}>
      <BackgroundImageContainer imageUrl={imageUrl}/>
      <Body onClick={goToRoute}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
