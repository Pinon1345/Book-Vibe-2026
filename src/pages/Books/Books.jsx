// import React from 'react';

import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {

    const { storedBook, wishList } = useContext(BookContext)
    console.log(storedBook, wishList, "Book Context");


   
    return (
        <div className="container mx-auto w-11/12 mt-5 mb-10 py-4">

            {/* React Tabs */}

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Books;