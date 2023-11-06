import React from 'react';
import cat1 from '../image/fruits.png';
import cat2 from '../image/vegetables.png';
import cat3 from '../image/Chips.png';
import cat4 from '../image/juice.png';
import cat5 from '../image/BreakfastSpecial.png';
import cat6 from '../image/chocolate.png';
import cat7 from '../image/cookies.png';
import cat8 from '../image/dairy products.png';

function Category({ onCategoryClick }) {
  const categories = [
    { id: 1, image: cat1, name: "Fresh Fruits" },
    { id: 2, image: cat2, name: "Vegetables" },
    { id: 3, image: cat3, name: "Chips" },
    { id: 4, image: cat4, name: "Juice" },
    { id: 5, image: cat5, name: "Breakfast Specials" },
    { id: 6, image: cat6, name: "Chocolates" },
    { id: 7, image: cat7, name: "Cookies" },
    { id: 8, image: cat8, name: "Dairy products" },
  ];

  return (
    <section className="category">
      <h1 className="title"> Our <span>Category</span> </h1>
      <div className="box-container">
        {categories.map(category => (
          <a href="#" className="box" key={category.id} onClick={() => onCategoryClick(category.name)}>
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Category;
