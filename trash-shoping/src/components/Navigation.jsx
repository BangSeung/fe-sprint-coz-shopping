import React, { useState } from "react"; 


export default function Navigation({ category, setCategory }) {
  const navs = [
    { category: "All", image: "/navall.svg", text: "전체" },
    { category: "Product", image: "/navproduct.svg", text: "상품" },
    { category: "Category", image: "/navcategory.svg", text: "카테고리" },
    { category: "Exhibition", image: "/navexhibition.svg", text: "기획전" },
    { category: "Brand", image: "/navbrand.svg", text: "브랜드" },
  ];
    const categorHandler = (category) => {
        setCategory(category)
  }

  return (
    <section className="navigation-container">
      {navs.map((nav,idx) => {
        return (
          <div key={idx} className={`navigation-button ${category===nav.category ?"category-now":""}`} onClick={()=>categorHandler(nav.category)} >
            <img src={`${nav.image}`} />
            <div>{`${nav.text}`}</div>
          </div>
        );
      })}
    </section>
  );
}