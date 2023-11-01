import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartProvider/CartProvider'; // Adjust the import path as needed
import './Checkout.css';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      name: '',
      lastName: '',
      address: '',
      country: '',
      zipCode: '',
      phoneNumber: '',
      cardNumber: '',
    });
    const [paymentCompleted, setPaymentCompleted] = useState(false);
  
    const total = cart.reduce((acc, item) => acc + item.productPrice, 0).toFixed(2);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleCompleteOrder = () => {
      setPaymentCompleted(true);
      clearCart();
    };
  
    const handleBackToShop = () => {
      navigate('/shop');
    };
  
    const isFormValid = () => {
      const isValid = Object.values(formData).every(value => value.trim());
      // console.log("Form Data:", formData);
      // console.log("Is Form Valid?", isValid);
      return isValid;
    };
  
    return (
      <div className="checkout-container"> {/* Add a unique class */}

      <div className="checkout">
        {paymentCompleted ? (
          <div>
            <div className="payment-completed">Payment Completed!</div>
            <button onClick={handleBackToShop}>Back to Shop</button>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.productName}</span> - <span>${item.productPrice.toFixed(2)}</span>
              </div>
            ))}
            <div className="cart-total">Total: ${total}</div>
            <div className="row">
            <div className="column">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className='full-width'
            />
          <div className="row">
            <div className="column">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button disabled={!isFormValid()} onClick={handleCompleteOrder}>Complete Order</button>
        </>
      )}
      </div>
    </div>

  );
};

export default Checkout;