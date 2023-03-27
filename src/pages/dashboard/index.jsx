import { useEffect } from 'react';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { Spinner } from '@/components/Spinner';
import usePagination from '@/hooks/usePagination';
import usePokemons from '@/hooks/usePokemons';
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
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
        {paginatePokes && paginatePokes !== [] ? (
          paginatePokes.map((pokemon) => (
            <Card key={pokemon.url} name={pokemon.name} {...pokemon} />
          ))
        ) : (
          <div h-screen flex items-center justify-center>
            <Spinner />
          </div>
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
