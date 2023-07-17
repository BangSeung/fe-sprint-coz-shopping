import React, { useCallback, useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Item from "../components/Item";
import Footer from "../components/Footer";

export default function PruductPage({
  products,
  bookmarkHandler,
  modalhandler,
}) {
  const [category, setCategory] = useState("All");
  const [itemNumbs, setItemNumbs] = useState(1);
  const bottom = useRef(null);

  useEffect(() => {
    setCategory("All");
    setItemNumbs(1);
  }, []);
  useEffect(() => {
    setItemNumbs(1);
  }, [category]);

  const renderNextPage = useCallback(() => {
    if (itemNumbs < 10) {
      setItemNumbs(itemNumbs + 1);
    }
  }, [itemNumbs, products]);
  useEffect(() => {
    if (bottom.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            renderNextPage();
          }
        },
        {
          threshold: 1,
        }
      );
      observer.observe(bottom.current);
      return () => observer.disconnect();
    }
  }, [renderNextPage]);

  return (
    <section className="page-body">
      <Navigation category={category} setCategory={setCategory} />
      <div className="page-items">
        {products
          .filter((el) => (category === "All" ? true : el.type === category))
          .slice(0, itemNumbs * 12)
          .map((product) => {
            return (
              <Item
                key={product.id}
                product={product}
                bookmarkHandler={bookmarkHandler}
                modalhandler={modalhandler}
              />
            );
          })}
      </div>
      <div ref={bottom}></div>
      <Footer />
    </section>
  );
}
