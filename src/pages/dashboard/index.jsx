import Card from '@/components/Card';
import { useLogout } from '@/hooks/useLogout';
import { useUser } from '@/hooks/useUser';
import Layout from '../../components/Layout/Layout';

export default function Dashboard() {
  const { user, getProfile } = useUser();
  const { getLogout } = useLogout();

  return (
    <Layout>
      <h1 className="text-center">Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={() => getProfile()}
      >
        Get profile
      </button>
      <button
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={() => getLogout()}
      >
        Logout
      </button>
      <Card/>
    </Layout>
  );
}
