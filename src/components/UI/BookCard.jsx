// import React from 'react';

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`}>
            <div className="card bg-base-100 shadow-sm rounded-2xl">
                <figure className="p-5 bg-[#F3F3F3] border-b rounded-2xl border-white">
                    <img
                        className="rounded-3xl w-[320px] h-90"
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">

                    <div className="flex items-center gap-3 font-semibold">
                        {book.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success p-3 rounded-2xl">{tag}</div>)}
                    </div>

                    <h2 className="card-title font-bold text-3xl">
                        {book.bookName}
                    </h2>
                    <p className="font-semibold text-lg pb-3">{book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 items-center">

                        <h2 className="font-semibold text-xl">{book.category}</h2>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">{book.rating}</p>
                            <FaRegStar className="text-amber-500 w-4 h-4"></FaRegStar>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default BookCard;