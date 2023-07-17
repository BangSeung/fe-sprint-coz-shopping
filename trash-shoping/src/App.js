import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header'
import Footer from "./components/Footer";
import BookmarkList from "./pages/BookmarkList";
import PruductPage from "./pages/ProductPage";
import DropDown from "./components/DropDown";
import MainPage from "./pages/MainPage";
import Modal from "./components/Modal";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([])
  const [dropDownValid, setDropDownValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProduct,setModalProduct]=useState({})
  const DropDownHandler = () => {
    setDropDownValid(!dropDownValid);
  };
  
  useEffect(() => {
     fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((res) => { return res.json() })
      .then((data) => { setProducts(data.map((el) => ({ ...el, bookmarked: false }))); })
  }, []);

  const bookmarkHandler = (product) => {
    setProducts(products.map((el) => el.id === product.id ? { ...el, bookmarked: !el.bookmarked } : el))
    if (isModalOpen) {
      setModalProduct({ ...modalProduct, bookmarked: !modalProduct.bookmarked});
    }
  }
  const modalhandler = (product) => {
    setIsModalOpen(!isModalOpen);
    setModalProduct(product)
  }


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
      {isModalOpen ? (
        <Modal
          bookmarkHandler={bookmarkHandler}
          modalhandler={modalhandler}
          modalProduct={modalProduct}
        />
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              modalhandler={modalhandler}
              products={products}
              bookmarkHandler={bookmarkHandler}
            />
          }
        />
        <Route
          path="/product/list"
          element={
            <PruductPage
              modalhandler={modalhandler}
              products={products}
              bookmarkHandler={bookmarkHandler}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <BookmarkList
              modalhandler={modalhandler}
              products={products}
              bookmarkHandler={bookmarkHandler}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
