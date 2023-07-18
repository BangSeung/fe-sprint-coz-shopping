import React, { useState, useEffect } from "react";
import Header from './components/Header'
import BookmarkList from "./pages/BookmarkList";
import PruductPage from "./pages/ProductPage";
import DropDown from "./components/DropDown";
import MainPage from "./pages/MainPage";
import Modal from "./components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    if (product.bookmarked) {
      toast("상품이 북마크에서 제거되었습니다.",{icon:<img src="/bookmarkoff.svg"/>});
    } else {
      toast("상품이 북마크에 추가되었습니다",{icon:<img src="/bookmarkon.svg"/>});
    }
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
      <ToastContainer
        position="bottom-right"
        limit={4}
        closeButton={false}
        autoClose={1000}
        hideProgressBar
      />
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
