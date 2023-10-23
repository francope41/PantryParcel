import React from 'react';

function Category() {
  const categories = [
    { id: 1, image: "../image/cat-1.png", name: "fresh fruits" },
    // ... other categories
  ];

  return (
    <section className="category">
      <h1 className="title"> our <span>category</span> <a href="#">view all {'>'}{'>'}</a> </h1>
      <div className="box-container">
        {categories.map(category => (
          <a href="#" className="box" key={category.id}>
            <img src={category.image} alt="" />
            <h3>{category.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Category;
