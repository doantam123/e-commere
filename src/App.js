import logo from './logo.svg';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';


function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
