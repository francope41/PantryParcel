import React from 'react';
import './SiteFooter.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
//import About from '../';
//import Review from './path-to-your-components/Review';
//import Contact from './path-to-your-components/Contact';


library.add(faArrowRight);

function SiteFooter() {
  return (
    <footer className='footer'>
      <Container className='box-container'>
        <div className="box">
          <h3>Quick Links</h3>
          {["home", "shop", "about", "review", "contact"].map(link => (
            <Link to={`/${link}`} key={link}>
            <FontAwesomeIcon icon="arrow-right" /> {link}
            </Link>
          ))}
        </div>

        <div className="box">
          <h3>Extra Links</h3>
          {["my order", "my favorite", "my wishlist", "my account", "terms of use"].map(link => (
            <Link to={`/${link}`} key={link}> {/* Use Link instead of a */}
              <FontAwesomeIcon icon="arrow-right" /> {link}
            </Link>
          ))}
        </div>

        <div className="box">
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates</p>
          <form action="">
            <input type="email" placeholder="enter your email" />
            <input type="submit" value="subscribe" className="btn" />
          </form>
          <img src="image/payment.png" className="payment" alt="" />
        </div>
      </Container>
      
      {/* Moved the credit section outside of the Container */}
      <div className="credit text-center">
        created by Pantry Parcel Team | all rights reserved!
      </div>
    </footer>
  );
}

export default SiteFooter;
