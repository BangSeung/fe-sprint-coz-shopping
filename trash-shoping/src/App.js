import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header'
import Footer from "./components/Footer";
import BookmarkList from "./pages/BookmarkList";
import PruductPage from "./pages/ProductPage";
import DropDown from "./components/DropDown";
import MainPage from "./pages/MainPage";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([])
  const [dropDownValid, setDropDownValid] = useState(false);
  const DropDownHandler = () => {
    setDropDownValid(!dropDownValid);
  };
  
  useEffect(() => {
     fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((res) => { return res.json() })
      .then((data) => { setProducts(data.map((el) => ({ ...el, bookmarked: false }))); })
  }, []);


  return (
    <BrowserRouter>
      <Header DropDownHandler={DropDownHandler} />
      {dropDownValid ? (
        <div>
          <DropDown DropDownHandler={DropDownHandler} />
          <div className="dropdown-back" onClick={DropDownHandler}></div>
        </div>
      ) : (
        <></>
      )}

      <Routes>
        <Route path="/" element={<MainPage products={products} />} />
        <Route path="/product/list" element={<PruductPage />} />
        <Route path="/bookmark" element={<BookmarkList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
