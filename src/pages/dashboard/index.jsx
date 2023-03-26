import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import usePagination from '@/hooks/usePagination';
import usePokemons from '@/hooks/usePokemons';
import { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';

export default function Dashboard() {
  const { pokemons, getPokemons } = usePokemons();
  const { pageSize, currentPage, paginatePokes, handlePageChange } =
    usePagination(pokemons);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {paginatePokes !== [] &&
        paginatePokes !== undefined &&
        paginatePokes !== '' ? (
          paginatePokes.map((pokemon) => (
            <Card key={pokemon.url} name={pokemon.name} />
          ))
        ) : (
          <Card />
        )}
      </div>
      <Pagination
        items={pokemons.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
}
