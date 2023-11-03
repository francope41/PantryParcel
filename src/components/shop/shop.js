import {React,useState} from 'react';
import './shop.css'; // Importing CSS specific to Shop
import Heading from './heading';
import Category from './Category';
import Products from './Products';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faHeart, faEye, /* any other icons you need */ } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';


library.add(faShoppingCart, faHeart, faEye);

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    console.log("Selected Category:", category); // This will print the selected category to the console
    setSelectedCategory(category);
  };

  return (
    <div>
      <Heading />
      <Category onCategoryClick={handleCategoryClick} />
      <Products selectedCategory={selectedCategory}/>
    </div>
  );
}

export default Shop;