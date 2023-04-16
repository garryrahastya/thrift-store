// Gallery.component.js

import React, { useState } from 'react';
import styles from './Gallery.module.css'
import GalleryItem from '../GalleryItem/GalleryItem.component';
import AddDataForm from '../AddDataForm/AddDataForm.component'; // Import komponen AddDataForm

function Gallery({ books }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newBooks, setNewBooks] = useState([]);
  
  // Tambahkan state untuk menyimpan data dari AddDataForm
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnailUrl: '',
    price: ''
  });

  const handleAddBook = (newBook) => {
    setNewBooks([...newBooks, newBook]);
  }

  const handleOpenModal = () => {
    setIsModalVisible(true);
  }

  const handleCloseModal = () => {
    setIsModalVisible(false);
  }

  // Tambahkan fungsi untuk mengubah state formData saat form diisi
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className={styles.gallery}>
      <h1>Welcome to our Thrift Store.</h1>
      <br/>
      <br/>
      <br/>
      <button onClick={handleOpenModal} className={styles.addBtn}>Add Data</button>
      <h3>Gallery</h3>
      
      {isModalVisible && (
        <div className={styles.modalOverlay}>
          {/* Pass handleFormChange sebagai props ke AddDataForm */}
          <AddDataForm handleCloseModal={handleCloseModal} handleAddBook={handleAddBook} handleFormChange={handleFormChange} />
        </div>
      )}
      <div className={styles.grid}>
        {
          // Render data dari state newBooks ke komponen GalleryItem
          newBooks.map((book) => <GalleryItem key={book.isbn} book={book} />)
        }
        {
          // Render data dari props books ke komponen GalleryItem
          books.map((book) => <GalleryItem key={book.isbn} book={book} />)
        }
      </div>
    </div>
  )
}

export default Gallery
