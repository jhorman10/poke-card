import { useEffect } from 'react';
import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import { Spinner } from '@/components/Spinner';
import usePagination from '@/hooks/usePagination';
import usePokemons from '@/hooks/usePokemons';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

export default function Dashboard() {
  const { pokemons, getPokemons } = usePokemons();
  const { pageSize, currentPage, paginatePokes, handlePageChange } =
    usePagination(pokemons);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-10">
        {paginatePokes && paginatePokes !== [] ? (
          paginatePokes.map((pokemon, i) => (
            <Link
              key={pokemon.name}
              href={{
                pathname: `/dashboard/${
                  currentPage >= 2 ? 10 * (currentPage - 1) + (i + 1) : i + 1
                }`,
                query: { name: pokemon.name },
              }}
            >
              <Card key={pokemon.url} name={pokemon.name} {...pokemon} />
            </Link>
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
