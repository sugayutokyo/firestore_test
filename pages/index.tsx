import type { NextPage } from 'next';

const Home: NextPage = () => {
  const getUser = async () => {
    console.log('next ok');
    fetch('/api/firestore/getUser');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="w-60 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => console.log('test')}>
        Create User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700"
        onClick={() => getUser()}>
        Get User
      </button>
    </div>
  );
};

export default Home;
