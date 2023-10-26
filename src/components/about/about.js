import React, { useState } from 'react';
import './about.css'; // Assuming you have a CSS file for styling
import Modal from 'react-modal';
import { FacebookShareButton, FacebookIcon  } from 'react-share';

import aboutImage from '../image/about-img.jpg';
import gallery_1 from '../image/gallery-img-1.jpg';
import gallery_2 from '../image/gallery-img-2.jpg';
import gallery_3 from '../image/gallery-img-3.jpg';
import gallery_4 from '../image/gallery-img-4.jpg';
import gallery_5 from '../image/gallery-img-5.jpg';
import gallery_6 from '../image/gallery-img-6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSearch,faHeart,  faShareAlt } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root'); // Adjust if necessary

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const GalleryBox = ({ image }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleHeart() {
    setHeartClicked(!heartClicked);
  }

  return (
    <div className="box">
      <img src={image} alt="Gallery Item" />
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faEye} onClick={openModal} />
        <FontAwesomeIcon className="icon" icon={faHeart} style={{ color: heartClicked ? 'red' : 'white' }} onClick={toggleHeart} />
        {/* Add your social share buttons here */}
        <FacebookShareButton url={window.location.href} quote="Check out this amazing page!">
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Image Modal">
        <img src={image} alt="Gallery Item" style={{ width: '100%' }} />
      </Modal>
    </div>
  );
};

const About = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="heading">
        <h1>About us</h1>
        <p>
          {' '}
          <a href="home.html">Home &gt;&gt;</a> About{' '}
        </p>
      </div>

      {/* About Section */}
      <section className="about">
        <div className="image">
          <img src={aboutImage} alt="about us" />
        </div>
        <div className="content">
          <span>Welcome to our Shop</span>
          <h3>Fresh and Organic Groceries</h3>
          <p>
            At Pantry Parcel, our mission is to bring the freshest, highest-quality organic produce right to your doorstep. We believe that
            everyone deserves access to nutritious, delicious, and ethically sourced food, which is why we have dedicated ourselves to
            creating a convenient and reliable online shopping experience for organic goods.
          </p>
          <p>
            Our Story Founded in 2023, our journey began with a simple yet profound belief: that nature provides the best ingredients for our
            health and well-being. Inspired by the richness of local farms and the need for more sustainable eating choices, Pantry Parcel was
            born. We started as a small team, passionate about making a difference in our community. Today, we have grown into a thriving
            online marketplace, connecting conscious consumers with organic farmers and artisans.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h1 className="title">
          {' '}
          Our <span>Gallery</span>{' '}
        </h1>
        <div className="box-container">
          <GalleryBox image={gallery_1} />
          <GalleryBox image={gallery_2} />
          <GalleryBox image={gallery_3} />
          <GalleryBox image={gallery_4} />
          <GalleryBox image={gallery_5} />
          <GalleryBox image={gallery_6} />
        </div>
      </section>
    </div>
  );
};

export default About;
