import React from 'react';
import styles from './GalleryItem.module.css';

function GalleryItem({ book }) {
  return (
    <div className={styles.gridItem}>
      <img src={book.thumbnailUrl} alt={book.title}  />
      <p><strong>{book.title}</strong></p>
      <p className={styles.description}>{book.description}</p>
      <p className={styles.price}>{book.price}</p>
    </div>
  )
}

export default GalleryItem;