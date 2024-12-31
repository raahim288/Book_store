import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Books Table</h1>
      <table className="w-full border-separate border-spacing-2 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-700 to-teal-600 text-white">
          <tr>
            <th className="px-4 py-2 text-center rounded-tl-lg">No</th>
            <th className="px-4 py-2 text-center">Title</th>
            <th className="px-4 py-2 text-center max-md:hidden">Author</th>
            <th className="px-4 py-2 text-center max-md:hidden">Publish Year</th>
            <th className="px-4 py-2 text-center rounded-tr-lg">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className={`text-gray-200 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} hover:bg-gray-600 transition-colors`}
            >
              <td className="px-4 py-2 text-center font-semibold">{index + 1}</td>
              <td className="px-4 py-2 text-center font-medium">{book.title}</td>
              <td className="px-4 py-2 text-center max-md:hidden">{book.author}</td>
              <td className="px-4 py-2 text-center max-md:hidden">{book.publish_year}</td>
              <td className="px-4 py-2 text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-500 hover:text-green-300 transition-colors" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-400 hover:text-yellow-200 transition-colors" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-300 transition-colors" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
