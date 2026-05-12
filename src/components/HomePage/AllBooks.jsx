// import React from 'react';

import { use } from "react";
import BookCard from "../UI/BookCard";

const booksPromise = fetch("/booksData.json")
    .then(response => response.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log("Books", books)

    return (
        <div className="my-12 container mx-auto w-11/12">

            <h2 className="font-bold text-4xl text-center mb-8 text-cyan-950">Books</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4 mb-15">

                {
                    books.map((book, index) => {
                        return (
                            <BookCard key={index} book={book}></BookCard>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default AllBooks;