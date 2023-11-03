import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../../graphql/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../CartProvider/CartProvider';

function Products({ selectedCategory }) {
  const [addedToCartMessage, setAddedToCartMessage] = useState(null);
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [likedProducts, setLikedProducts] = useState({});
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCartMessage(`${product.productName} added to cart!`);
    setTimeout(() => {
      setAddedToCartMessage(null);
    }, 3000); // Message will disappear after 3 seconds
  };

  const handleExpand = (productId) => {
    setExpandedProductId((prev) => (prev === productId ? null : productId));
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

  const visibleProducts = products
  .filter(product => 
    (!searchQuery || product.productName.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (!selectedCategory || product.category === selectedCategory)
  );
  return (
    <section className="products">
      <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
      {addedToCartMessage && <div className="added-to-cart-message">{addedToCartMessage}</div>}
      <h1 className="title">
        Our <span>Products</span>
      </h1>
      <div className="box-container">
        {visibleProducts
          .map((product) => (
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
                  <div className="overlay">
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
