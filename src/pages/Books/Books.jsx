// import React from 'react';

import { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {

    // const { storedBook, wishList } = useContext(BookContext)
    // console.log(storedBook, wishList, "Book Context");

    const [shortingType, setShortingType] = useState("");
    console.log(shortingType, "Sorting Type");

    return (
        <div className="container mx-auto w-11/12 mt-5 mb-10 py-4">


            {/* Drop Down */}

            <div className="flex justify-center items-center text-center gap-y-6">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {shortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setShortingType("Pages")}>
                            <a>Pages</a>
                        </li>
                        <li onClick={() => setShortingType("Rating")}>
                            <a>Rating</a>
                        </li>
                    </ul>
                </div>
            </div>


            {/* React Tabs */}

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList shortingType={shortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList shortingType={shortingType}></ListedWishList>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;