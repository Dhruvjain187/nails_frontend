import { PaginateContainer } from "../styles/Paginate";
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../Redux/Slices/filterSlice";

export default function Paginate({ pages }) {
    const [currentPage, setCurrentPage] = useState(0);
    // const pageCount = 10;
    // const filterData = useSelector(state => state.filter);
    const dispatch = useDispatch()
    const { limit } = useSelector(state => state.filter);
    const { page } = useSelector(state => state.filter);


    const handlePageClick = (event) => {
        // setCurrentPage(event.selected);
        dispatch(changePage(event.selected + 1))
    };

    return (
        <>
            <PaginateContainer>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<i className="fa-solid fa-angle-right"></i>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pages}
                    previousLabel={<i className="fa-solid fa-angle-left"></i>}
                    renderOnZeroPageCount={null}
                    forcePage={page - 1}
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