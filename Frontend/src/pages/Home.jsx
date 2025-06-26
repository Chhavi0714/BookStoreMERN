import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import Footer from '../components/Footer';
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://bookstoremern-1.onrender.com/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
<div className="p-3 m-3 bg-gray-200 min-h-screen overflow-x-hidden rounded-xl shadow-md">

<h1 className="text-4xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-sky-700 to-black drop-shadow-lg">
  Books Store
</h1>


    <div className="flex w-full max-w-6xl mx-auto my-4 border-2 border-slate-500 rounded-xl shadow-xl/30">
    <div className=" w-3/4 ">  <img
    src="bookstore.jpg"
    alt="Background"
    className=" h-48 w-full object-cover rounded-xl" />
    </div>
  <div className="w-1/4 bg-slate-100 rounded-r-xl flex flex-col justify-center items-center gap-y-4 p-4 shadow-md">
         <button
          className='bg-gray-800  hover:bg-sky-900 px-5 py-2 text-3xl text-slate-400 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-blue-900 hover:bg-sky-900 px-5 py-2 text-3xl text-sky-400  rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
        </div>
      <div className='flex justify-between items-center'>
<h1 className="text-4xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-gray-700 to-black drop-shadow-lg">
  Books List
</h1>

<Link
  to="/books/create"
  className="flex items-center gap-2 text-sky-800 text-xl font-semibold hover:text-sky-600 transition-colors duration-200"
>
  <MdOutlineAddBox className="text-3xl" />
  Create
</Link>

      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
   <Footer/>
    </div>
  );
};

export default Home;