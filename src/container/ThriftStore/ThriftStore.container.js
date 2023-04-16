import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar.component";
import Gallery from "../../components/Gallery/Gallery.component";
import constants from "../../constants";
import styles from "./ThriftStore.module.css";

const { books: booksData } = constants;

function Bookstore() {
  const [masterData, setMasterData] = useState(booksData)
  const [books, setBooks] = useState(booksData);
  const [noResults, setNoResults] = useState(false);

  const handleOnSearch = (searchValue) => {
    const searchResults = masterData.filter((book) => {
      const lowerCaseTitle = book.title.toLowerCase();
      return lowerCaseTitle.includes(searchValue.toLowerCase());
    });
    setBooks(searchResults);
    setNoResults(searchResults.length === 0);
  };

  return (
    <div>
      <Navbar handleSubmit={handleOnSearch} />
      <div className={styles.contentWrapper}>
        <Gallery books={books}  />
      </div>
    </div>
  );
}

export default Bookstore;
