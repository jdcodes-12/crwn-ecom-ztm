import React from 'react';
import {
  DirectoryItemContainer,
  BackgroundImageContainer,
  Body,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;

  return (
    <DirectoryItemContainer as='article'>
      <BackgroundImageContainer imageUrl={imageUrl}/>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
