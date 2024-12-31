import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Delete = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error deleting the book.', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <BackButton />
      <h1 className="text-4xl font-bold text-center mb-8">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center bg-gray-900 rounded-lg shadow-xl w-[500px] mx-auto p-8 text-gray-300">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Are you sure you want to delete this book?
        </h3>
        <button
          onClick={handleDeleteBook}
          className="w-full py-3 px-6 bg-red-600 hover:bg-red-800 text-white font-bold rounded-md shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400"
        >
          Yes, Delete It
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-md shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Delete;
