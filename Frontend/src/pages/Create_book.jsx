import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Create_books = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publish_year, setpublish_year] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = { title, author, publish_year };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully!', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error occurred while creating the book.', {
          variant: 'error',
        });
        console.error(error);
      });
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <BackButton />
      <h1 className="text-4xl font-bold text-center mb-8">Create a New Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col bg-gray-900 rounded-lg shadow-xl w-[500px] mx-auto p-6 text-gray-300">
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter book title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter author name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Publish Year</label>
          <input
            type="number"
            value={publish_year}
            onChange={(e) => setpublish_year(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter publish year"
          />
        </div>
        <button
          onClick={handleSaveBook}
          className="w-full bg-gradient-to-r from-teal-800 to-teal-600 text-white font-bold py-3 rounded-md shadow-md hover:from-teal-700 hover:to-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400"
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default Create_books;
