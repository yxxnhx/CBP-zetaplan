import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginatedItems = ({ handlePageClick, pageRangeCount, pageCount }) => {
  
  return (
    <>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={10}
        pageRangeDisplayed={pageRangeCount}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;