import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Item from "../components/Item";
import Footer from "../components/Footer";

export default function BookmarkList({ products, bookmarkHandler }) {
  const [category, setCategory] = useState("All");
  const [itemNumbs, setItemNumbs] = useState(1);

  useEffect(() => {
    setCategory("All");
  }, []);

  return (
    <section className="page-body">
      <Navigation category={category} setCategory={setCategory} />
      <div className="page-items">
        {products.filter((el) => (category === "All" ? true : el.type === category)&&el.bookmarked).length?(products
          .filter((el) => (category === "All" ? true : el.type === category)&&el.bookmarked)
          .slice(0, itemNumbs * 12)
          .map((product) => {
            return (
              <Item
                key={product.id}
                product={product}
                bookmarkHandler={bookmarkHandler}
              />
            );
          })):(<div className="none-container"><h3 className="bookmarklist-none">북마크 된 항목이 없습니다</h3></div>)}
      </div>
      <Footer />
    </section>
  );
}
