import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartProvider'; // Adjust the import path as needed
import './CartDropdown.css';

const CartDropdown = ({ show, onClose }) => {
  const { cart, clearCart } = useCart();
  const [cardInfo, setCardInfo] = useState('');
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  if (!show) return null;

  const total = cart.reduce((acc, item) => acc + item.productPrice, 0).toFixed(2);

  const handleCardInfoChange = (event) => {
    setCardInfo(event.target.value);
  };

  const handleCompleteOrder = () => {
    // Here you would typically send the card information to your server
    // to process the payment. For this example, we'll just simulate a payment.
    setPaymentCompleted(true);
    clearCart();
    onClose();
    navigate('/shop');
  };

  return (
    <div className="cart-dropdown">
      {paymentCompleted ? (
        <div>Payment Completed</div>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.productName}</span> - <span>${item.productPrice.toFixed(2)}</span>
            </div>
          ))}
          <div className="cart-total">Total: ${total}</div>
          <button onClick={handleCheckout}>Checkout</button>
          {cardInfo && <button onClick={handleCompleteOrder}>Complete Order</button>}
          <button onClick={onClose}>Close</button>
        </>
      )}
    </div>
  );
};

export default CartDropdown;
