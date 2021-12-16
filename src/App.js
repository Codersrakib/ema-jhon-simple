import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,Routes ,Route, Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
 
function App() {
  return (
      <div className="app">
        <Router>
          <Header></Header>
          <Routes>
          <Route path='/shop' element={<Shop/>} />
          <Route path='/review' element={<Review/>} />
          <Route path='/manage' element={<Inventory/>} />
          <Route path='/' element={<Shop/>} />
          <Route path='/product/:productkey' element={<ProductDetails/>} />
          <Route path='*' element={<NotFound/>} />
          </Routes>
        </Router>
        
        
      </div>
  );
}

export default App;
