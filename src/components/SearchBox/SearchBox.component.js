import React, { useState } from 'react';

import styles from './SearchBox.module.css'; // Pastikan Anda telah mengimport file CSS atau module CSS untuk styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Jika Anda menggunakan Font Awesome
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTimes);

function SearchBox({ handleSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleOnChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(searchInput);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    handleSubmit(''); // Panggil handleSubmit dengan parameter kosong untuk membersihkan hasil pencarian
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.searchForm}>
      <input
        value={searchInput}
        type="text"
        id="search"
        name="search"
        placeholder='Search by Title...'
        className={styles.searchInput}
        onChange={handleOnChange}
      />
      {searchInput && ( // Tampilkan tombol "X" hanya jika searchInput tidak kosong
        <button
          className={styles.clearButton}
          type="button"
          onClick={handleClearSearch}
        >
          <FontAwesomeIcon icon={['fas', 'times']} /> {/* Gunakan ikon "X" dari Font Awesome */}
        </button>
      )}
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
