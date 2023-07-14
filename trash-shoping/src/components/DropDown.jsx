import React from "react";
import { Link } from "react-router-dom";
export default function DropDown({DropDownHandler}) {
    return (
      <div className="dropdown-container">
        <div className="dropdown-hi">OOO님 안녕하세요</div>
        <Link to="/product/list" onClick={DropDownHandler}><span className="dropdown-item">상품리스트 페이지</span></Link>
        <Link to="/bookmark" onClick={DropDownHandler}><span className="dropdown-item item2" >북마크 페이지</span></Link>
      </div>
    );
}