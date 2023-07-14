import React from "react";
import Footer from "../components/Footer";
import Item from "../components/Item";

export default function MainPage({ products }) {
  
  return (
    <>
      <div className="mainpage-body">
        <section className="mainpage-container">
          <h3 className="mainpage-sub-title">상품 리스트</h3>
          <div className="mainpage-items">
            {products
              .filter((product) => !product.bookmarked)
              .slice(0, 4)
              .map((product) => (
                <Item
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
        </section>
        <section className="mainpage-container">
          <h3 className="mainpage-sub-title">북마크 리스트</h3>
          <div className="mainpage-items">
            {products.filter((product) => product.bookmarked).length ? (
              products.filter((product) => product.bookmarked)
              .slice(0, 4)
              .map((product, idx) => (
                <Item key={idx} product={product} />
              ))):(<h5>북마크가 없습니다.</h5>)}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}