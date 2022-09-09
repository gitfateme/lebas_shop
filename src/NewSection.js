import React, { useState, useEffect } from "react";
import "./styles/NewSection.scss";
import imgItem1 from "./images/item-1.jpg";
import imgItem2 from "./images/item-2.jpg";
import imgItem3 from "./images/item-3.jpg";
import PaginationButtonsRow from "./PaginationButtonsRow";

function NewSection() {
  const [items, setItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const itemsArr = [
      {
        name: "ست شومیز و شلوار سانی",
        image: imgItem1,
        price: 245000,
      },
      {
        name: "تاپ کاپرینا",
        image: imgItem2,
        price: 350000,
      },
      {
        name: "پیراهن",
        image: imgItem3,
        price: 89000,
      },
    ];
    let longItemsArr = [];
    for (let i = 0; i < 10; i++) {
      for (let y = 0; y < itemsArr.length; y++) {
        longItemsArr.push(itemsArr[y]);
      }
    }
    setItems(longItemsArr);
    setItemsPerPage(8);
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    setPagesCount(Math.ceil(items.length / itemsPerPage));
    let newItems = items.slice(
      currentPage * itemsPerPage - itemsPerPage,
      currentPage * itemsPerPage
    );
    setCurrentItems(newItems);
    console.log(newItems);
  }, [itemsPerPage, currentPage, items]);

  function nextPage(e) {
    e.preventDefault();
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage(e) {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="NewSection ">
      <div className="container">
        <hr />
        <h2>جدیدترین محصولات</h2>
        <hr className="mb-2"/>
        <div className="new-pagination-container container ">
          <div className="items-container row">
            {currentItems.map((item, index) => {
              return (
                <div className="item-wrapper col-6 col-lg-3 " key={index}>
                  <div className="item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <span className="item-name">{item.name}</span>
                      <div className="price-wrapper">
                        <span>{item.price}</span>
                        <span>تومان</span>
                      </div>
                      <a href="/" className="item-btn btn btn-warning">
                        مشاهده و خرید
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <PaginationButtonsRow
            currentPage={currentPage}
            pagesCount={pagesCount}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
    </div>
  );
}

export default NewSection;
