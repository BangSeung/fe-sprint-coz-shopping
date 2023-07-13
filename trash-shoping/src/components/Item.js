import React from "react";

export default function Item() {
    return (
      <article className="product-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src="https://images.unsplash.com/photo-1587245937293-b0510ee4c2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          />
          <input className="bookmark-button" type="button"/>
        </div>
        <div className="product-text-container">
          <div className="product-text-line line2">
            <span>나이키신발</span>
            <span>관심고객수</span>
          </div>
          <div className="product-text-line">
            <span>최고의 신발</span>
            <span>7837명</span>
          </div>
        </div>
      </article>
    );
}