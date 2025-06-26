import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((response) => {
        console.log("RESPONSE FROM BACKEND ===>", response.data);
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="flex flex-row-reverse items-start gap-6 bg-white p-6 rounded-xl shadow-md">
            {/* Image Block (on the right) */}
            <div className="w-64 h-80 rounded-lg overflow-hidden border border-gray-300 shadow">
              <img
                src={`https://bookstoremern-1.onrender.com/books${book.image}`}
                alt="Book cover"
                className="w-full h-full object-cover"
              />
            <h5 className="flex flex-col gap-4 text-gray-700">Book Cover</h5>
            </div>
            
            {/* Details Block (on the left) */}
            <div className="flex flex-col gap-4 text-gray-700">
              <div>
                <span className="text-xl font-semibold text-gray-500 mr-4">
                  ID:
                </span>
                <span className="break-all">{book._id}</span>
              </div>
              <div>
                <span className="text-xl font-semibold text-gray-500 mr-4">
                  Title:
                </span>
                <span>{book.title}</span>
              </div>
              <div>
                <span className="text-xl font-semibold text-gray-500 mr-4">
                  Author:
                </span>
                <span>{book.author}</span>
              </div>
              <div>
                <span className="text-xl font-semibold text-gray-500 mr-4">
                  Publish Year:
                </span>
                <span>{book.publishYear}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">Create Time</span>
                <span>{new Date(book.createdAt).toString()}</span>
              </div>
              <div className="my-4">
                <span className="text-xl mr-4 text-gray-500">
                  Last Update Time
                </span>
                <span>{new Date(book.updatedAt).toString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
