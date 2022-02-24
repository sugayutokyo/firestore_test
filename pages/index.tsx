import axios from 'axios';
import type { NextPage } from 'next';


const Home: NextPage = () => {

  const createUser = async () => {
    const createdUser = await axios.post('/api/user');
    console.log(1111, createdUser);
  };

  const getUser = async () => {
    const allUser = await axios.get('/api/user', {
      params: {
        operation: 'allUser',
      },
    });
    console.log(2222, allUser);
  };

  const updateUser = async () => {
    const updatedUser = await axios.patch('/api/user');
    console.log(3333, updatedUser);
  };

  const deleteUser = async () => {
    const deletedUser = await axios.delete('/api/user');
    console.log(4444, deletedUser);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="w-60 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => createUser()}>
        Create User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-yellow-500 py-2 px-4 font-bold text-white hover:bg-yellow-700"
        onClick={() => getUser()}>
        Get User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        onClick={() => updateUser()}>
        Update User
      </button>
      <button
        className="mt-4 w-60 rounded-full bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
        onClick={() => deleteUser()}>
        Delete User
      </button>
    </div>
  );
};

export default Home;
