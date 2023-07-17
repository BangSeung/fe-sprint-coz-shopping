import React,{useEffect} from "react";

export default function Modal({ modalProduct, modalhandler, bookmarkHandler }) {
    useEffect(() => {
        
    })
  return (
    <div className="modal-back" onClick={() => modalhandler(modalProduct)}>
      <div
        className="modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          onClick={(event) => event.stopPropagation()}
          className="modal-image"
          src={`${
            modalProduct.image_url
              ? modalProduct.image_url
              : modalProduct.brand_image_url
          }`}
        />
        <input
          type="button"
          className="modal-close-button"
          onClick={() => modalhandler(modalProduct)}
        />
        <div className="modal-bookmark-button-container">
          <input
            type="button"
            onClick={() => bookmarkHandler(modalProduct)}
            className={`modal-bookmark-button ${
              modalProduct.bookmarked ? "modal-checked-bookmarkbutton" : ""
            }`}
          />
          <span className="modal-title">{`${
            modalProduct.type === "Category" ? "#" : ""
          }${modalProduct.title || modalProduct.brand_name}`}</span>
        </div>
      </div>
    </div>
  );
}