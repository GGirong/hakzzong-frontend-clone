import React from 'react';

export const Pagination = ({ pageBlock, page, setPage, ...props }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {pageBlock.map((pageNumber, key) => (
                    <li
                        className={`page-item ${
                            page === pageNumber ? 'active' : ''
                        }`}
                        key={key}
                    >
                        <a
                            className="page-link"
                            onClick={e => setPage(pageNumber)}
                        >
                            {pageNumber}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
