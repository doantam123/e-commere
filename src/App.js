import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routes/CustomerRoutes';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}> </Route>
      </Routes>
      <div>
      </div>
    </div>
  );
}

export default App;
