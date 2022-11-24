import ReactPaginate from 'react-paginate';
import './Pagination.scss'

function Pagination ({totalPages, handlePageChange}) {
    
    return (
        <div className='container'>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange= {(page)=> handlePageChange(page)}
                containerClassName="pagination"
                activeClassName="active"
            />
            
        </div>
    )
}

export default Pagination