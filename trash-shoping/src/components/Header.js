import React, { useState } from "react";
import DropDown from "./DropDown";

export default function Header() {
    const [dropDownValid, setDropDownValid] = useState(false)
    const openDropDownHandler = () => {
      setDropDownValid(!dropDownValid);
    };

    return (
      <section className="header-container">
        <div className="title-container">
          <img className="logo" src="../logo.png" alt="logo" />
          <h1 className="main-title">COZ Shopping</h1>
        </div>
        <div className="hamburger-container">
                <input onClick={openDropDownHandler} onBlur={openDropDownHandler} type="button" className="hamburger-button" />
          {dropDownValid?<DropDown/>:null}
        </div>
      </section>
    );
}