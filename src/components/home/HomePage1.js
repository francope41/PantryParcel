import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"

function HomePage(){
    return(
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image 
                        src='/img/logo.png'
                        fluid />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">Pantry Parcel</h1>
                    <p className="mt-4">
                        Lorem Ipsum
                        <br /><br />
                        Lorem ipsum dolor sit amet asdolanca aspo maspd maspom poamf paosmfapsofmaspofaaso
                        aspdmaspfoamsfpaomfpasofmapsofmapfomaspofapofmapsofmapsfmaspofmaspofmas
                        asfoinmaofianfoainfoainfoanfaosifnaosfinasofinasodkmda aosifdnasof inao insafoiasnf oasinf aofn 
                        ao flnafo ina oasinf ao ifnaosfnaofinasofi no ian aosnfoaifn aofi nafonfweoaknflaskjrflcn 
                        alsfdikalfknmafl 
                        asdf;asokfdjnasfnasopfamnsfa
                    </p>
                    <Button variant="outline-primary">Get Started &gt;&gt;</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;