import React from 'react';
import './shop.css'; // Importing CSS specific to Shop
import Heading from './heading';
import Category from './Category';
import Products from './Products';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faHeart, faEye, /* any other icons you need */ } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faHeart, faEye);

function Shop() {
  return (
    <div>
      <Heading />
      <Category />
      <Products />
    </div>
  );
}

export default Shop;
