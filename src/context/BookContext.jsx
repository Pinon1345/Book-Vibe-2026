// import React from 'react';

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, getAllReadListFromLocalDB } from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());

    const [wishList, setWishList] = useState([]);

    // useEffect(() => {
    //     const getReadListFromLocalDB = getAllReadListFromLocalDB()
    //     console.log(getReadListFromLocalDB, "getReadListFromLocalDB")
    //     setReadList(getReadListFromLocalDB);
    // }, [])

    console.log(readList, "readList");

    const handleMarkAsRead = (currentBook) => {

        // step 1 - store book ID or store book object
        // step 2 - where to store
        // step 3 - array or collection
        // step 4 - if the book is already exist then show a alert or toast
        // step 5 - if not then add the book in the array or collection


        const isExistBook = readList.find(book => book.bookId === currentBook.bookId)
        if (isExistBook) {
            toast.error("Ahh! The book is already exist");
        }
        else {
            toast.success(`Congratulations! ${currentBook.bookName} book is Successfully added to Read list`)
            setReadList([...readList, currentBook])
        }

        console.log("Book", currentBook, readList);


    }
    const handleWishList = (currentBook) => {

        // step 1 - store book ID or store book object
        // step 2 - where to store
        // step 3 - array or collection
        // step 4 - if the book is already exist then show a alert or toast
        // step 5 - if not then add the book in the array or collection

        addReadListToLocalDB(currentBook)

        const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId)

        if (isExistInReadList) {
            toast.error("This book is already in read list")
            return;
        }


        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)
        if (isExistBook) {
            toast.error("Ahh! The book is already exist");
        }
        else {
            toast.success(`Congratulations! ${currentBook.bookName} book is Successfully added to Wish list`)
            setWishList([...wishList, currentBook])
        }

        console.log("Book", currentBook, wishList);
    }

    const data = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;