import React from 'react';
import './review.css'; // Import your CSS file
import icon1 from '../image/icon-1.png'; // Adjust the path as necessary
import icon2 from '../image/icon-2.png';
import icon3 from '../image/icon-3.png';
import pic1 from '../image/pic-2.png';
import pic2 from '../image/pic-1.png';
import pic3 from '../image/pic-4.png';
import pic4 from '../image/pic-3.png';
import pic5 from '../image/pic-5.png';
import pic6 from '../image/pic-6.png';

const ClientReviews = () => {
    const reviews = [
        {
          imgSrc: pic1,
          name: 'Aria Johnson',
          status: 'Satisfied Customer',
          text: 'The quality of the organic food here is unmatched. I’ve never felt better after switching to Pantry Parcel!'
        },
        {
          imgSrc: pic2,
          name: 'Lucas Graham',
          status: 'Regular Shopper',
          text: 'Efficient delivery and great customer service. They have a wide range of products that caters to all my needs.'
        },
        {
          imgSrc: pic3,
          name: 'Ella Mae',
          status: 'Health Enthusiast',
          text: 'I appreciate the transparency of Pantry Parcel in sourcing their produce. It’s fresh and the taste is noticeable!'
        },
        {
          imgSrc: pic4,
          name: 'Dylan Hayes',
          status: 'New Customer',
          text: 'I was recommended by a friend and I’m impressed. The ordering process was seamless and my groceries were at my doorstep in no time.'
        },
        {
          imgSrc: pic5,
          name: 'Michael Turner',
          status: 'Happy Parent',
          text: 'As a parent, ensuring my kids eat healthy is a top priority. Thanks to Pantry Parcel, I’m confident in the food they consume daily.'
        },
        {
            imgSrc: pic6, // make sure to import pic6 at the top of your file
            name: 'Sofia Kim',
            status: 'Organic Aficionado',
            text: 'Discovering Pantry Parcel has been a game changer for my family. The fresh produce and reliable service make healthy living so much easier!'
        }
          
      ];

  return (
    <div>
      <div className="heading">
        <h1>Client's Review</h1>
        <p> <a href="home.html">Home &gt;&gt;</a> Review </p>
      </div>

      <section className="info-container">
        <div className="info">
          <img src={icon1} alt="" />
          <div className="content">
            <h3>Fast Delivery</h3>
            <span>within 30 minutes</span>
          </div>
        </div>
        <div class="info">
            <img src={icon2} alt="" />
            <div class="content">
                <h3>24 / 7 available</h3>
                <span>call us anytime</span>
            </div>
        </div>

        <div class="info">
            <img src={icon3} alt="" />
            <div class="content">
                <h3>easy payments</h3>
                <span>cash or credits</span>
        </div>
    </div>
      </section>

      <section className="review">
        {reviews.map((review, index) => (
          <div key={index} className="box">
            <div className="user">
              <img src={review.imgSrc} alt="" />
              <div className="info">
                <h3>{review.name}</h3>
                <span>{review.status}</span>
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ClientReviews;
