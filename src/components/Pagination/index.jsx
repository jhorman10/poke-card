import _ from 'lodash';

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="relative">
      <nav className="absolute inset-x-0 -bottom-64 flex items-center justify-center">
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              type="button"
              disabled={true}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {' '}
              Back{' '}
            </button>
          </li>
          {pages.map((page) => (
            <li key={page} className={page === currentPage ? 'scale-125' : ''}>
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
          <li>
            <button
              type="button"
              disabled={true}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {' '}
              Next{' '}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
