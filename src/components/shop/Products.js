import React from 'react';

function Products() {
  const products = [
    { id: 1, image: "../image/product-1.jpg", name: "organic food", price: "$18.99" },
    // ... other products
  ];

  return (
    <section className="products">
      <h1 className="title"> our <span>products</span> <a href="#">view all {'>'}{'>'}</a> </h1>
      <div className="box-container">
        {products.map(product => (
          <div className="box" key={product.id}>
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <div className="price">{product.price}</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
