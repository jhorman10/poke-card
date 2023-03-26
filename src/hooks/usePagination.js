import { useState } from 'react';
import { PAGINATION_SIZE } from '@/constants';
import { paginate } from '@/utils/pagination';

export default function usePagination(pokemons) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = PAGINATION_SIZE;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatePokes = paginate(pokemons, currentPage, pageSize);

  return {
    pageSize,
    currentPage,
    paginatePokes,
    handlePageChange,
  };
}
