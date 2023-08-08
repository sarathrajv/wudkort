import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Boutique.css';
import NavBar from './Component/NavBar';
import Home from './Home';
import LivingRoom from './Component/Livingroom/LivingRoom';
import DiningRoom from './Component/Diningroom/DiningRoom';
import BedRoom from './Component/Bedroom/BedRoom';
import Kitchen from './Component/Kitchen/Kitchen';
import StoreRoom from './Component/Kitchen/StoreRoom/StoreRoom';
import { useState, useEffect } from 'react';
import ShoppingCart from './Component/Livingroom/ShoppingCart';
import CheckOutPopup from './Component/Livingroom/CheckOutPopup';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useLocalStorage('myCart', []);
  const [warning, setWarning] = useState(false);

  const handClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = [...cart]; // Make a copy of cart array
    tempArr[ind].amount += d;
    if (tempArr[ind].amount <= 0) // Ensure the amount is never less than 1
      tempArr[ind].amount = 1;
    setCart(tempArr);
  };

  useEffect(() => {
    // Load cart data from local storage on page load
    const storedCart = JSON.parse(localStorage.getItem('myCart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    // Save cart data to local storage whenever cart changes
    localStorage.setItem('myCart', JSON.stringify(cart));
  }, [cart]);



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<NavBar size={cart.length} setShow={setShow} />}
          >
            <Route index element={<Home />} />
          </Route>

          <Route
            path="LivingRoom"
            element={<LivingRoom size={cart.length} setShow={setShow} handClick={handClick} handleChange={handleChange} />}
          />

          <Route
            path="DiningRoom"
            element={<DiningRoom size={cart.length} setShow={setShow} handClick={handClick} handleChange={handleChange} />}
          />

          <Route
            path="BedRoom"
            element={<BedRoom size={cart.length} setShow={setShow} handClick={handClick} handleChange={handleChange} />}
          />

          <Route
            path="Kitchen"
            element={<Kitchen size={cart.length} setShow={setShow} handClick={handClick} handleChange={handleChange} />}
          />

          <Route
            path="StoreRoom"
            element={<StoreRoom size={cart.length} setShow={setShow} handClick={handClick} handleChange={handleChange} />}
          />

          <Route
            path="ShoppingCart"
            element={<ShoppingCart cart={cart} setCart={setCart} handleChange={handleChange} />}
          />
         
        </Routes>
      </BrowserRouter>

      {warning && alert("Item already exists in the cart!")}
    </div>
  );
}

export default App;
