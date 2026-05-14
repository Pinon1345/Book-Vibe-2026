// import React from 'react';

// import { use } from "react";
// import { useContext, useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import { BookContext } from "../../context/BookContext";
// import { BookContext } from "../../Context/BookContext";

// const bookPromise = fetch("/booksData.json")
// .then(response => response.json())

const BookDetails = () => {

    const { bookId: bookParamsId } = useParams()
    console.log("bookId", typeof bookParamsId);

    const books = useLoaderData()
    // console.log("Books", books);

    const expectedBook = books.find((book) => book.bookId === Number(bookParamsId))
    // console.log(expectedBook);


    const { bookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = expectedBook;


    const { handleMarkAsRead, storedBook, handleWishList } = useContext(BookContext)
    console.log(handleMarkAsRead, storedBook, "Book Context");



    // const books = use(bookPromise);
    // console.log("BOOKS", books);

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-lg container gap-10 p-6 mx-auto w-11/12 mt-12 mb-10">
                <div>
                    <figure>
                        <img
                            className="object-fill w-120 h-120 border-30 border-gray-100 rounded-lg"
                            src={image}
                            alt={bookName} />
                    </figure>
                </div>
                <div className="space-y-3">
                    <h2 className="card-title font-bold text-4xl">{bookName}</h2>
                    <p className="font-semibold text-xl">By : {author}</p>
                    <p className="font-semibold text-lg border-y-2 border-gray-300 py-2 mt-6">{category}</p>
                    <p className="text-lg text-justify"><span className="font-bold">Review: </span>{review}</p>
                    <div className="pt-4 pb-6 border-b-2 border-gray-300 mb-4 flex text-center items-center gap-6">

                        <h2 className="font-bold text-lg">Tag</h2>

                        <div className="flex items-center justify-center text-center gap-3 font-semibold">
                            {
                                tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success p-3 rounded-2xl">{tag}</div>)
                            }
                        </div>
                    </div>
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between gap-4">
                            <p className="font-semibold text-lg">Number of Pages:</p>
                            <span className="font-bold text-lg">{totalPages}</span>
                        </div>

                        <div className="flex items-center justify-between text-center gap-4">
                            <p className="font-semibold text-lg">Publisher:</p>
                            <span className="font-bold text-lg">{publisher}</span>
                        </div>

                        <div className="flex items-center justify-between text-center gap-4">
                            <p className="font-semibold text-lg">Year of Publishing:</p>
                            <span className="font-bold text-lg">{yearOfPublishing}</span>
                        </div>

                        <div className="flex items-center justify-between text-center gap-4">
                            <p className="font-semibold text-lg">Rating:</p>
                            <span className="font-bold text-lg">{rating}</span>
                        </div>

                    </div>

                    <div className="card-actions justify-start space-y-4 gap-4">
                        <button
                            onClick={() => handleMarkAsRead(expectedBook)}
                            className="btn btn-outline hover:bg-green-100 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-green-500 text-green-600 px-6 py-3">
                            Mark as Read
                        </button>

                        <button
                            onClick={() => handleWishList(expectedBook)}
                            className="btn bg-[#59C6D2] hover:bg-[#46b3bf] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Add to Wishlist
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;