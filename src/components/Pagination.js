import React, { useEffect, useState } from 'react';

const Pagination = ({
  pages,
  setCurrentPage,
  currentEmployees,
  sortedEmployees,
}) => {
  const numOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className='clearfix'>
      <div className='hint-text'>
        Showing <b>{currentEmployees.length}</b> out of{' '}
        <b>{sortedEmployees.length}</b> entries
      </div>
      <ul className='pagination'>
        <li
          className={currentButton === 1 ? 'page-item disabled' : 'page-item'}
          onClick={() =>
            setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
          }>
          <a href='#!'>Previous</a>
        </li>
        {numOfPages.map((page, index) => (
          <li
            key={index}
            className={
              currentButton === page ? 'page-item active' : 'page-item'
            }
            onClick={() => setCurrentButton(page)}>
            <a href='#!'>{page}</a>
          </li>
        ))}
        <li
          className={
            currentButton === numOfPages.length
              ? 'page-item disabled'
              : 'page-item'
          }
          onClick={() =>
            setCurrentButton((next) =>
              next === numOfPages.length ? next : next + 1
            )
          }>
          <a href='#!'>Next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
