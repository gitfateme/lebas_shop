import React from "react";
import "./styles/NewSection.scss";
import imgItem1 from "./images/item-1.jpg";
import imgItem2 from "./images/item-2.jpg";
import imgItem3 from "./images/item-3.jpg";
import imgItem4 from "./images/item-4.jpg";

function NewSection() {
  const itemsArr = [
    {
      name: "پیراهن",
      image: imgItem1,
    },
    {
      name: "پیراهن",
      image: imgItem2,
    },
    {
      name: "پیراهن",
      image: imgItem3,
    },
    {
      name: "پیراهن",
      image: imgItem4,
    },
  ];

  return (
    <div className="NewSection ">
      <div className="container">
        <hr />
        <h2>جدیدترین محصولات</h2>
        <hr />
        <div className="new-pagination-container container mt-5">
          <div className="items-container row">
            {itemsArr.map((item, index) => {
              return (
                <div className="item-wrapper col-6 col-md-3" key={index}>
                  <img
                    src={item.image}
                    className=" img-fluid"
                    alt={item.name}
                  />
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="pagination-btns-container"></div>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
