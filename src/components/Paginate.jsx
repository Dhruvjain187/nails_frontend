import { PaginateContainer } from "../styles/Paginate";
import ReactPaginate from 'react-paginate';
import { useNavigate, useLocation } from "react-router";

export default function Paginate({ pages, page, setSelectedFilters }) {
    const navigate = useNavigate();
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const handlePageClick = (event) => {
        // setCurrentPage(event.selected);
        setSelectedFilters((prev) => {
            return { ...prev, page: event.selected + 1 }
        })

        const newParams = new URLSearchParams(searchParams);
        newParams.set("page", event.selected + 1)
        navigate(`?${newParams.toString()}`, { replace: true }); // replaces instead of pushing new history entry
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