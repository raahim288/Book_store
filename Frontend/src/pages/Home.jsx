import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable ';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 min-h-screen text-gray-800">
      {/* Toggle View Buttons */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-lg font-bold shadow-lg transition-all ${
            showType === 'table'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-100'
          }`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
 
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-800">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-blue-600 text-5xl hover:text-blue-800 transition-all" />
        </Link>
      </div>

      {/* Content Section */}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
