import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div>{pagesArray.map(p =>
            <button 
            onClick={() => changePage(p)}
            key={p} 
            className={page === p ? 'page page__current' : 'page'}>{p}</button>)}
          </div>
    );
};

export default Pagination;