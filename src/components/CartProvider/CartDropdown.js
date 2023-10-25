import React from 'react';
import ReactDOM from 'react-dom';
import './CartDropdown.css';
import CheckoutButton from '../CheckoutProvider/CheckoutBtn'; // Adjust the path as needed

const CartDropdown = ({ cart, show, onClose }) => {
  if (!show) return null;

  const total = cart.reduce((acc, item) => acc + item.productPrice, 0).toFixed(2);

  const handleSuccessfulPayment = (order) => {
    console.log('Payment successful!', order);
    onClose();
    // Here you can add additional logic to handle a successful payment,
    // such as updating the order status in your database.
  };

  return ReactDOM.createPortal(
    <div className="cart-dropdown">
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.productName}</span> - <span>${item.productPrice.toFixed(2)}</span>
        </div>
      ))}
      <div className="cart-total">Total: ${cart.reduce((acc, item) => acc + item.productPrice, 0).toFixed(2)}</div>
      <button onClick={onClose}>Close</button>
      <div className="cart-checkout">
      <CheckoutButton amount={total} onSuccessfulPayment={handleSuccessfulPayment} />
    </div>
    </div>,
    document.getElementById('cart-dropdown-portal')
    
  );
};

export default CartDropdown;
