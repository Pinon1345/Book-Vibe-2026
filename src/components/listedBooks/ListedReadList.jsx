// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../UI/BookCard";

const ListedReadList = ({ shortingType }) => {

    const { readList } = useContext(BookContext)
    console.log(readList, "Book Context");

    const [filteredReadList, setFilteredReadList] = useState(readList);

    useEffect(() => {
        if (shortingType) {
            if (shortingType === "Pages") {
                const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages)
                console.log(sortedData);
                setFilteredReadList(sortedData)

            }
            else if (shortingType === "Rating") {
                const sortedData = [...readList].sort((a, b) => a.rating - b.rating)
                console.log(sortedData);
                setFilteredReadList(sortedData)


            }
        }

    }, [shortingType, readList])

    if (filteredReadList.length === 0) {
        return <div className="h-[40vh] bg-gray-100 flex items-center text-center justify-center rounded-xl mt-10 shadow-xl">
            <h2 className="text-5xl font-bold">There is no book in Read List!</h2>
        </div>
    }

    return (
        <div className="mt-10">

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredReadList.map((book, index) => <BookCard key={index} book={book}></BookCard>)
                }
            </div>

        </div>
    );
};

export default ListedReadList;