import React from 'react';
import styles from './GalleryItem.module.css';

function GalleryItem({ book }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={book.thumbnailUrl} alt={book.title} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.title}><strong>{book.title}</strong></p>
        <p className={styles.description}>{book.description}</p>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>Rp. {book.price.toLocaleString('ID')}</p>
          <button className={styles.buyBtn}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default GalleryItem;
