import _ from 'lodash';
import Link from 'next/link';
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav className='flex items-center justify-center mt-5'>
        <ul className="inline-flex -space-x-px">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
            >
              <button
                type="button"
                style={{ cursor: 'pointer' }}
                onClick={() => onPageChange(page)}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
