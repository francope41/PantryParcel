import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

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

  
  const generateStars = () => {
    const rating = Math.floor(Math.random() * 6); // Generate a random number between 0 and 5
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon icon={faStarSolid} key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={faStarRegular} key={i} />);
      }
    }
    return stars;
  };

  return (
    <section className="products">
      <h1 className="title">Our <span>Products</span> <a href="#">view all {'>'}{'>'}</a></h1>
      <div className="box-container">
        {products.map(product => (
          <div className="box" key={product.id}>
            <div className="icons">
              <FontAwesomeIcon icon={faShoppingCart} />
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faEye} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="image">
              <img src={product.productImage} alt={product.productName} />
            </div>
            <div className="content">
              <h3>{product.productName}</h3>
              <div className="price">{formatPrice(product.productPrice)}</div>
              {/* <div className="description">
                {product.productDescription}
              </div> */}
              <div className="quantity">
                Quantity Available: {product.quantityAvailable}
              </div>
              <div className="stars">
                {/* You can add rating functionality here if needed */}
                {generateStars()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;