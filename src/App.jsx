import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import {Route, Routes,} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';
import './App.css'; // import the styles
import 'bootstrap/dist/css/bootstrap.min.css'
import awsExports from './aws-exports';

import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';
import HomePage from './components/home/HomePage1';
import LoginPage from './components/auth/LoginPage';
import ShopPage from './components/shop/shop'
import AboutPage from './components/about/about'
import ReviewPage from './components/review/review'
import ContactPage from './components/contact/contact'
import { CartProvider } from './components/CartProvider/CartProvider';


Amplify.configure(awsExports);

function App() {
  return (
    <CartProvider>
      <div>
        <SiteNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add other routes as needed */}
        </Routes>
        <SiteFooter />
      </div>
    </CartProvider>
  );
}

export default App;
