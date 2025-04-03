import { PaginateContainer } from "../styles/Paginate";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

export default function Paginate() {
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = 10;

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <PaginateContainer>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<i className="fa-solid fa-angle-right"></i>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={<i className="fa-solid fa-angle-left"></i>}
                    renderOnZeroPageCount={null}
                    forcePage={currentPage}
                    containerClassName="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                />
            </PaginateContainer>
        </>
    )
}