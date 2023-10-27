import React from 'react';
import './contact.css'; // make sure you have your CSS styles in the same folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
      <div className="heading">
        <h1>Contact us</h1>
        <p><a href="home.html">Home &gt;&gt;</a> Contact</p>
      </div>

      <section className="contact">
        <div className="icons-container">
          <div className="icons">
            <FontAwesomeIcon icon={faPhone} />
            <h3>Our Number</h3>
            <p>+1 210-790-9279</p>
          </div>

          <div className="icons">
          <FontAwesomeIcon icon={faEnvelope} />
            <h3>Our Email</h3>
            <p>pantryparcel@gmail.com</p>
          </div>

          <div className="icons">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
            <h3>Our Address</h3>
            <p>One UTSA Circle, San Antonio, TX</p>
          </div>
        </div>

        <div className="row">
          <form action="">
            <h3>Get in touch</h3>
            <div className="inputBox">
              <input type="text" placeholder="Enter your name" className="box" />
              <input type="email" placeholder="Enter your email" className="box" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="Enter your number" className="box" />
              <input type="text" placeholder="Enter your subject" className="box" />
            </div>
            <textarea placeholder="Your message" cols="30" rows="10"></textarea>
            <input type="submit" value="Send message" className="btn" />
          </form>

          <iframe className="map" src="https://www.google.com/maps/place/One+UTSA+Circle,+San+Antonio,+TX+78249/@29.5820768,-98.6210045,17z/data=!3m1!4b1!4m6!3m5!1s0x865c6661a439bd87:0xcc3a410430eb8fea!8m2!3d29.5820722!4d-98.6184296!16s%2Fg%2F11c4n605g2?entry=ttu" allowFullScreen="" loading="lazy"></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
