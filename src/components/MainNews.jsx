import data from '../data/data.json';
import styles from './MainNews.module.css';

export function MainNews() {
  const { articles } = data;
  return (
    <div className={styles.mainNewsContainer}>
      <img
        className={styles.mainImg}
        src={articles[0].urlToImage}
        alt={articles[0].title}
      />
      <div>
        <h2 className={styles.mainTitle}>{articles[0].title}</h2>
        <p className={styles.mainDescription}>{articles[0].description} </p>
      </div>
    </div>
  );
}
