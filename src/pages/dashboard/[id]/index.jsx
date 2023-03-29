import { Card, Layout } from '@/components';
import { GET_POKEMON_DETAILS } from '@/constants';
import { useRouter } from 'next/router';

export default function ID() {
  const router = useRouter();
  const { query } = router;
  const { id, name } = query;

  const url = `${GET_POKEMON_DETAILS}${id}`;
  const pokemon = {
    url,
    name,
  };

  return (
    <Layout>
      <div className="w-screen h-50 mt-40 flex content-center justify-center">
        <Card {...pokemon} />
      </div>
    </Layout>
  );
}
