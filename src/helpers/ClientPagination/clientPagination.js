import React, { useEffect, useState, createRef } from 'react';

export const useClientPagination = ({ items, b_size = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayItems, setDisplayItems] = useState([]);
  const ref = createRef();

  useEffect(() => {
    const start = (currentPage - 1) * b_size;
    const end = start + b_size;
    setDisplayItems(items.slice(start, end));
  }, [currentPage]);

  const totalPages = Math.ceil(items.length / b_size);

  const onPaginationChange = (activePage) => {
    let page = activePage;
    if (page != currentPage && ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setCurrentPage(page);
  };

  return { onPaginationChange, currentPage, totalPages, displayItems, ref };
};
