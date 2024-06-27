import logo from './logo.svg';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import ProductCard from './customer/components/Product/ProductCard';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
