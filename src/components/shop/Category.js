import React from 'react';
import cat1 from '../image/cat-1.png';
import cat2 from '../image/cat-2.png';
import cat3 from '../image/cat-3.png';
import cat4 from '../image/cat-4.png';
import cat5 from '../image/cat-5.png';
function Category({ onCategoryClick }) {
  const categories = [
    { id: 1, image: cat1, name: "Fresh Fruits" },
    { id: 2, image: cat2, name: "Vegetables" },
    { id: 3, image: cat3, name: "Chips" },
    { id: 4, image: cat4, name: "Juice" },
    { id: 5, image: cat5, name: "Breakfast Specials" },
    { id: 6, image: cat5, name: "Chocolates" },
    { id: 7, image: cat5, name: "Cookies" },
    { id: 8, image: cat5, name: "Dairy products" },
  ];

  return (
    <section className="category">
      <h1 className="title"> Our <span>Category</span> </h1>
      <div className="box-container">
        {categories.map(category => (
          <a href="#" className="box" key={category.id} onClick={() => onCategoryClick(category.name)}>
            <img src={category.image} alt="" />
            <h3>{category.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Category;
