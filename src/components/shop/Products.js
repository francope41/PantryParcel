import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons'

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const [expandedProductId, setExpandedProductId] = useState(null);

  const handleExpand = (productId) => {
    setExpandedProductId((prev) => (prev === productId ? null : productId));
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

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
      <h1 className="title">
        Our <span>Products</span> <a href="#">view all {'>'}{'>'}</a>
      </h1>
      <div className="box-container">
        {products.map((product) => (
          <div
            className={`box ${expandedProductId === product.id ? 'expanded' : ''}`}
            key={product.id}
            style={{
              display: expandedProductId !== null && expandedProductId !== product.id ? 'none' : 'block',
            }}
          >
            <div className="icons">
              <FontAwesomeIcon
                className="icon-FA"
                icon={faShoppingCart}
                onClick={() => handleAddToCart(product)}
              />
              <FontAwesomeIcon
                className="icon-FA"
                icon={faHeart}
                onClick={() => toggleLike(product.id)}
                style={{ color: likedProducts[product.id] ? 'red' : undefined }}
              />
              <FontAwesomeIcon
                className="icon-FA"
                icon={faEye}
                onClick={() => handleExpand(product.id)}
              />
            </div>
            {expandedProductId === product.id ? (
              <div
              className="expanded-content"
              style={{ backgroundImage: `url(${product.productImage})` }}
              >
                <div className="overlay"> {/* Optional: To enhance text visibility */}
                  <h3>{product.productName}</h3>
                  <div className="price">{formatPrice(product.productPrice)}</div>
                  <div className="description">{product.productDescription}</div>
                </div>
              </div>
            ) : (
              <>
                <div className="image">
                  <img src={product.productImage} alt={product.productName} />
                </div>
                <div className="content">
                  <h3>{product.productName}</h3>
                  <div className="price">{formatPrice(product.productPrice)}</div>
                  <div className="quantity">
                    Quantity Available: {product.quantityAvailable}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
            }

export default Products;