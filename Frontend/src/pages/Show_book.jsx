import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const Show_book = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <BackButton />
      <h1 className="text-4xl font-bold text-center mb-8">📚 Book Details</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="max-w-lg mx-auto p-6 bg-gray-900 text-gray-300 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">
            {book.title || 'Unknown Title'}
          </h2>
          <div className="space-y-4">
            <DetailRow label="ID" value={book._id || 'N/A'} />
            <DetailRow label="Author" value={book.author || 'Unknown Author'} />
            <DetailRow
              label="Publish Year"
              value={book.publish_year || 'Unknown Year'}
            />
            <DetailRow
              label="Created At"
              value={new Date(book.createdAt).toLocaleString() || 'N/A'}
            />
            <DetailRow
              label="Last Updated"
              value={new Date(book.updatedAt).toLocaleString() || 'N/A'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center bg-gray-800 p-4 rounded-md shadow-md">
    <span className="font-semibold text-gray-400">{label}</span>
    <span className="font-medium text-white">{value}</span>
  </div>
);

export default Show_book;
