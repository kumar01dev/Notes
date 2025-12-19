import React from "react";
import {Link} from 'react-router-dom';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';


function BooksTable({books}) {
  return (
    <table className="w-full border-separate border-spacing-2 ">
        <thead>
            <tr>
                <th className="border border-slate-700 rounded-md">No</th>
                <th className="border border-slate-700 rounded-md">Title</th>
                <th className="border border-slate-700 rounded-md max-md:hidden">
                Author</th>
                <th className="border border-slate-700 rounded-md max-md:hidden">
                Publish Date</th>
                <th className="border border-slate-700 rounded-md "> Operations</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book, index) => (
                <tr key={book._id} className="h-9">
                    <td className="border border-slate-700 rounded-md text-center">
                        {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                        {book.title}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                        {book.author}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                        {/* {book.publishDate} */}
                        {new Date(book.publishDate).toLocaleDateString()}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center ">
                        <div className="flex justify-center gap-x-5 md:gap-x-9 ">
                            <Link to={`/books/read/${book._id}`}>
                                <BsInfoCircle className="text-2xl text-green -800" />
                            </Link>
                            <Link to={`/books/update/${book._id}`}>
                                <AiOutlineEdit className="text-2xl text-yellow -800" />
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                                <AiOutlineDelete className="text-2xl text-red -800" />
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default BooksTable;