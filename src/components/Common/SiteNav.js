import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './SiteNav.css';
import { useCart } from '../CartProvider/CartProvider';
import CartDropdown from '../CartProvider/CartDropdown'; // Adjust the path as needed

function SiteNav() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.productPrice, 0);
  const [showSearch, setShowSearch] = useState(false); // New state for search bar visibility
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query


  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (err) {
      setUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      navigate('/'); // redirect to home after logging out
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${searchQuery}`); // Navigate to /shop with the search query as a URL parameter
    setShowSearch(false); // Hide the search bar after navigating
  };

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavbarBrand as={Link} to="/" className="navbar-brand">
            <img src="/img/logo.png" alt="Pantry Parcel" className="navbar-logo" />
            <span>Pantry Parcel</span>
          </NavbarBrand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/review">Review</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={() => setShowCartDropdown(!showCartDropdown)}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>  
              <CartDropdown
                cart={cart}
                show={showCartDropdown}
                onClose={() => setShowCartDropdown(false)}
              />
              {user ? (
                <Nav.Link onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /></Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login"><FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default SiteNav;
