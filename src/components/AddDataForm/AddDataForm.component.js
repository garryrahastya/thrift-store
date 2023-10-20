import React, { useState } from 'react';
import styles from './AddDataForm.module.css';

function AddDataForm({ handleCloseModal, handleAddBook, handleFormChange }) {
  const [error, setError] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (
      formData.get('title') === '' ||
      formData.get('description') === '' ||
      formData.get('thumbnail') === '' ||
      formData.get('price') === ''
    ) {
      setError('All Fields are required!');

      // Set timeout untuk menghapus error setelah 4 detik
      setTimeout(() => {
        setError(null);
      }, 2000);

      // Menambahkan kelas CSS 'shake' ke input saat error
      const inputs = event.target.elements;
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.add(styles.shake);
        setTimeout(() => {
          inputs[i].classList.remove(styles.shake);
        }, 1000);
      }
    } else {
      const newBook = {
        title: formData.get('title'),
        description: formData.get('description'),
        thumbnailUrl: formData.get('thumbnail'),
        price: formData.get('price'),
      };
      handleAddBook(newBook);
      handleCloseModal();
    }
  }

  const handleInputChange = (event) => {
    if (error) {
      setError(null);
    }
    handleFormChange(event);
  }

  return (
    <div className={styles.modalForm}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input type="text" name="title" id="title" className={`${styles.modalInput} ${error ? styles.error : ''}`} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <input type="text" name="description" id="description" className={`${styles.modalInput} ${error ? styles.error : ''}`} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="thumbnail" className={styles.label}>Thumbnail</label>
          <input type="text" name="thumbnail" id="thumbnail" className={`${styles.modalInput} ${error ? styles.error : ''}`} onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price" className={styles.label}>Price (Put Rp. infront)</label>
          <input type="number" name="price" id="price" className={`${styles.modalInput} ${error ? styles.error : ''}`} onChange={handleInputChange} />
        </div>
        {error && <p className={styles.errorMsg}>{error}</p>}
        <button type="submit" className={styles.modalBtn}>Add</button>
        <button type="button" className={styles.modalBtn} onClick={handleCloseModal}>Cancel</button>
      </form>
    </div>
  )
}
export default AddDataForm;
