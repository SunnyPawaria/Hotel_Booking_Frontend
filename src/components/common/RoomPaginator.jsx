import React from "react";

const RoomPaginator = ({ currentPage, totaPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totaPages }, (_, i) => i + 1);
  return (
    <nav>
      <ul className="pagination, justify-content-center">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              currentPage === pageNumber ? "acitve" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RoomPaginator;
