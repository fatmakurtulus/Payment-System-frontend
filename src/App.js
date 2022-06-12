import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import Apartment from './components/Aparment';
import User from './components/User';
import Payment from './components/Payment';
import Navigation from './components/Navigation';



function App() {
  return (
    <div>
    <BrowserRouter>
    <div className='container'>
      <h3 className='m-3 d-flex justify-content-center'>
        baslık
      </h3>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/aparment' element={<Apartment/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
