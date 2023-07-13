import React from "react";
import Footer from "../components/Footer";
import Item from "../components/Item";

export default function MainPage({products}) {
  return (
    <>
      <div className="mainpage-body">
        <section className="mainpage-container">
          <h3 className="mainpage-sub-title">상품 리스트</h3>
          <div className="mainpage-items">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </section>
        <section className="mainpage-container">
          <h3 className="mainpage-sub-title">북마크 리스트</h3>
          <div className="mainpage-items">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}