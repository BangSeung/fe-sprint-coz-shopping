import React from "react";

export default function Item({ product }) {
  const {
    title,
    brand_image_url,
    brand_name,
    checked,
    discountPercentage,
    follower,
    image_url,
    price,
    sub_title,
    type,
  } = product;
    return (
      <article className="product-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src={`${image_url ? image_url : brand_image_url}`}
          />
          <input className="bookmark-button" type="button" />
        </div>
        <div className="product-text-container">
          <div className="product-text-line line2">
            <span>{`${title || brand_name}`}</span>
            <span>{`${discountPercentage||(follower?'관심고객수':"")||""}${discountPercentage?'%':""}`}</span>
          </div>
          <div className="product-text-line">
            <span>{`${sub_title||""}`}</span>
            <span>{`${(follower?follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):undefined)||(price?price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','):undefined)||""}${price?'원':""}`}</span>
          </div>
        </div>
      </article>
    );
}