import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'

import AllBooks from './components/AllBooks';
import NavBar from './components/NavBar';
import BookAllByCategory from './components/BookAllByCategory';
import Login from './components/Login';
import GetBook from './components/GetBook';
import Register from './components/Register';
import Cart from './components/Cart';
import Order from './components/Order';
import OrderItem from './components/OrderItem';
import SuccessDrawer from './components/success-model';




function App() {

  
  return (
    <div className="App">

<Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<AllBooks/>}></Route>
          <Route path="/book/get/:id" element={<GetBook/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/orders" element={<Order/>}></Route>
          <Route path="/success" element={<SuccessDrawer />} />
          <Route path="/orderitem/:id" element={<OrderItem/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/cat/:category" element={<BookAllByCategory/>}></Route>
        </Routes>
    
      </Router>
      
    </div>
  );
}

export default App;
