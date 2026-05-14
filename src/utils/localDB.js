

const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList')

    if (allReadList) return JSON.parse(allReadList);

    return [];

}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    if (!isAlreadyExist) {
        // ei data ta local db te add krte chai
        allBooks.push(book)
        localStorage.setItem("read list", JSON.stringify(allBooks))
    }

}

export { getAllReadListFromLocalDB, addReadListToLocalDB };