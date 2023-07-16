import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ DropDownHandler }) {
  return (
    <section className="header-container">
      <div className="title-container">
        <Link to="/" ><img className="logo" src="../logo.png" alt="logo" /></Link>
        <h1 className="main-title">COZ Shopping</h1>
      </div>
      <div className="hamburger-container">
        <input
          onClick={DropDownHandler}
          type="button"
          className="hamburger-button"
        />
      </div>
    </section>
  );
}