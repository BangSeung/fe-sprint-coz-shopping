import React from "react";
import { Link } from "react-router-dom";
export default function DropDown() {
    return (
      <div className="dropdown-container">
        <div className="dropdown-hi"><span>OOO님 안녕하세요</span></div>
        <Link to="/product/list"><div className="dropdown-item"><span>상품리스트 페이지</span></div></Link>
        <Link to="/bookmark"><div className="dropdown-item item2"><span>북마크 페이지</span></div></Link>
      </div>
    );
}