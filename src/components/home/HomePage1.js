import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel'; // <-- Import Carousel for slider
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import homeBg from '../image/home-bg.jpg';
import home_img_1 from '../image/home-img-1.png';
import home_img_2 from '../image/home-img-2.png';
import home_img_3 from '../image/home-img-3.png';
import banner1 from '../image/banner-1.jpg';
import banner2 from '../image/banner-2.jpg';
import banner3 from '../image/banner-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage1.css'


function HomePage() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const productData = await API.graphql(graphqlOperation(listTodos));
            console.log(productData);

            const productList = productData.data.listTodos.items;
            setProducts(productList);
        } catch (error) {
            console.log('error on fetching products', error);
        }
    }

    const goToShop = () => { // <-- Function to navigate to /shop
        navigate('/shop');
    }

    return (
        <Container fluid style={{ 
            backgroundImage: `url(${homeBg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Slider Component */}
            <Row className="my-5">
                <Col xs={12}>
                    <Carousel>
                        {[home_img_1, home_img_2, home_img_3].map((imgSrc, index) => (
                            <Carousel.Item key={index}>
                            <Row className="carousel-content">
                                <Col md={6} className="content-container">
                                    <div className="content">
                                        <span>fresh and organic</span>
                                        <h3>upto 50% off</h3>
                                        <Button variant="primary" onClick={goToShop}>Shop Now</Button>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img
                                        className="carousel-img"
                                        src={imgSrc}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
                        
            <section className="banner-container">
                {[banner1, banner2, banner3].map((bannerImg, index) => (
                    <div className="banner" key={index}>
                        <img src={bannerImg} alt={`Banner ${index + 1}`} />
                        <div className="content">
                            <span>limited sales</span>
                            <h3>upto 50% off</h3>
                            <Button variant="primary" onClick={goToShop}>Shop Now</Button>
                        </div>
                    </div>
                ))}
            </section>

        </Container>
    )
}
export default HomePage;
