import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import React, { useEffect, useState } from 'react';
import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';


function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProduct()
    }, []);

    const fetchProduct = async () => {
        try{
        const productData = await API.graphql(graphqlOperation( listTodos ));
        const productList = productData.data.listTodos.items;
        console.log('Produts list', productList);
        setProducts(productList);
        } catch (error) {
        console.log('error on fetching products', error);
        }
    }
    return (
        <Container fluid>
            {/* Products Display */}
            <Row className="px-4 my-5">
                {products.map((product, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={product.productID || index}>
                        <Card>
                            <Card.Img variant="top" src={product.productImage || "/img/sample-product.jpg"} />
                            <Card.Body>
                                <Card.Title>{product.productName || `Product ${index + 1}`}</Card.Title>
                                <Card.Text>
                                    {product.productDescription || "Some brief product description."}
                                </Card.Text>
                                <Button variant="primary">View Product</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Tabs Section */}
            <Row className="px-4 my-5">
                <Col xs={12}>
                    <Tabs defaultActiveKey="home" id="product-tabs">
                        <Tab eventKey="home" title="Home">
                            {/* You can replace this with your products component */}
                            <p>Home Products</p>
                        </Tab>
                        <Tab eventKey="electronics" title="Electronics">
                            {/* You can replace this with your products component */}
                            <p>Electronics Products</p>
                        </Tab>
                        <Tab eventKey="clothing" title="Clothing">
                            {/* You can replace this with your products component */}
                            <p>Clothing Products</p>
                        </Tab>
                        <Tab eventKey="accessories" title="Accessories">
                            {/* You can replace this with your products component */}
                            <p>Accessories Products</p>
                        </Tab>
                        {/* Add more tabs as needed */}
                    </Tabs>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;
