import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // You'll need to install and setup FontAwesome with React to use this.

function SiteFooter() {
    return (
        <footer className='footer'>
        
            <Container className='py-5'>
                <div className="box-container">
                    
                    <div className="box">
                        <h3>quick links</h3>
                        {["home", "shop", "about", "review", "contact"].map(link => (
                            <a href={`${link}.html`} key={link}>
                                <FontAwesomeIcon icon="arrow-right" /> {link}
                            </a>
                        ))}
                    </div>

                    <div className="box">
                        <h3>extra links</h3>
                        {["my order", "my favorite", "my wishlist", "my account", "terms of use"].map(link => (
                            <a href="#" key={link}>
                                <FontAwesomeIcon icon="arrow-right" /> {link}
                            </a>
                        ))}
                    </div>

                    <div className="box">
                        <h3>newsletter</h3>
                        <p>subscribe for latest updates</p>
                        <form action="">
                            <input type="email" placeholder="enter your email" />
                            <input type="submit" value="subscribe" className="btn" />
                        </form>
                        <img src="image/payment.png" className="payment" alt="" />
                    </div>

                </div>

                <div className="credit text-center mt-5">
                    created by Pantry Parcel Team | all rights reserved!
                </div>
            </Container>
        </footer>
    );
}

export default SiteFooter;
