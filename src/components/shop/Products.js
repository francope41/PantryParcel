import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const productData = await API.graphql(graphqlOperation(listTodos));
      console.log(productData)
      const productList = productData.data.listTodos.items;
      setProducts(productList);
    } catch (error) {
      console.log('error on fetching products', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <section className="products">
      <h1 className="title">Our <span>Products</span> <a href="#">view all {'>'}{'>'}</a></h1>
      <div className="box-container">
        {products.map(product => (
          <div className="box" key={product.id}>
            <div className="icons">
              <a href="#" className="fas fa-shopping-cart"></a>
              <a href="#" className="fas fa-heart"></a>
              <a href="#" className="fas fa-eye"></a>
            </div>
            <div className="image">
              <img src={product.productImage} alt={product.productName} />
            </div>
            <div className="content">
              <h3>{product.productName}</h3>
              <div className="price">{formatPrice(product.productPrice)}</div>
              <div className="description">
                {product.productDescription}
              </div>
              <div className="quantity">
                Quantity Available: {product.quantityAvailable}
              </div>
              <div className="stars">
                {/* You can add rating functionality here if needed */}
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