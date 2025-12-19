import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import BooksCard from "../components/BooksCard.jsx";
import BooksTable from "../components/BooksTable.jsx";


function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType,setShowType] = useState("table")

  useEffect(() => {
    setLoading(true);

    // fetch("http://localhost:2000/books/read")
    //     .then((res)=>{
    //         res.json()
    //         .then((db)=>{
    //             setBooks(db.data);
    //             console.log(db.data);
    //             console.log(db.count);
    //             console.log(db.data.title);
    //         })
    // setLoading(false);
    //     })

    axios
      .get("http://localhost:2000/books/read")
      .then((res) => {
        setBooks(res.data.data);
        console.log("res data is:", res.data);
        console.log("res data data is:", res.data.data);
        console.log("The title is:", res.data.data[0].title);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error is :", error);
        setLoading(false);
      }); 
  }, []);


  return (
    <div className="p-4 flex flex-col justify-center">

        <div className='flex justify-center items-center gap-x-4'>
            <button
                className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={() => setShowType("table")}
            >
                Table
            </button>
            <button
                className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={() => setShowType("card")}
            >
                Card
            </button>
        </div>

        <div className="flex justify-between items-center">
            <h2 className="text-3xl my-8 ">Books List</h2>
            <Link to="books/create">
                <MdOutlineAddBox className="text-sky-600 text-4xl" />
            </Link>
        </div>

        {loading ? 
             <Spinner />  : 
            // <table >
            //     <thead >
            //         <tr>
            //             <th className="px-4 py-2 border-4 border-slate-700 rounded-md font-bold text-xl ">
            //                 No
            //             </th>
            //             <th className="px-20 py-2 border-4 border-slate-700 rounded-md font-bold text-xl ">
            //                 Title
            //             </th>
            //             <th className="px-20 py-2 border-4 border-slate-700 rounded-md font-bold text-xl max-md:hidden">
            //                 Author
            //             </th>
            //             <th className="px-20 py-2 border-4 border-slate-700 rounded-md font-bold text-xl max-md:hidden">
            //                 Publish Date
            //             </th>
            //             <th className="px-20 py-2 border-4 border-slate-700 rounded-md font-bold text-xl ">
            //                 Operations
            //             </th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {books.map((book, index) => (
            //             <tr key={index}>
            //                 <td className="py-4 border border-slate-700 rounded-md text-center">
            //                     {index + 1}
            //                 </td>
            //                 <td className="py-4 border border-slate-700 rounded-md text-center">
            //                     {book.title}
            //                 </td>
            //                 <td className="py-4 border border-slate-700 rounded-md text-center max-md:hidden">
            //                     {book.author}
            //                 </td>
            //                 <td className="py-4 border border-slate-700 rounded-md text-center max-md:hidden">
            //                     {/* {book.publishDate} */}
            //                     {new Date(book.publishDate).toLocaleDateString()}

            //                 </td>
            //                 <td className="py-4 border border-slate-700 rounded-md text-center ">
            //                     <div className="flex justify-center gap-x-3">
            //                         <Link to={`/books/read/${book._id}`}>
            //                             <BsInfoCircle className="text-2xl text-green-600" />
            //                         </Link>
            //                         <Link to={`/books/update/${book._id}`}>
            //                             <AiOutlineEdit className="text-2xl text-yellow-600" />
            //                         </Link>
            //                         <Link to={`/books/delete/${book._id}`}>
            //                             <AiOutlineDelete className="text-2xl text-red-600" />
            //                         </Link>
            //                     </div>
            //                 </td>
            //             </tr>
            //         ))}
            //     </tbody>
            // </table>

            showType === "table" ? 
              ( < BooksTable books={books} /> ) : ( < BooksCard books= {books} /> )
        }
    </div>
  );
}

export default Home;