import React from "react";
import "./styles/PaginationButtonsRow.scss";

export default function PaginationButtonsRow(props) {
  return (
    <div className="pagination-container row align-items-center my-3">
      <div className="col-12 col-md-3 ">
        <a href="/" className="btn btn-primary w-100">
          صفحه قبل
        </a>
      </div>
      <div className="col-12 col-md-6 current-page-container py-3">
        صفحه
        <input type="text" value={1} />
        از ۴
      </div>
      <div className="col-12 col-md-3">
        <a href="/" className="btn btn-primary w-100">
          صفحه بعد
        </a>
      </div>
    </div>
  );
}
