import data from '../data/data.json';
import styles from './NewsGrid.module.css';

export function NewsGrid() {
  const { articles } = data;
  return (
    <ul className={styles.newsGridContainer}>
      {articles.map((elem, i) => (
        <li key={elem.url} className={styles.newsCard}>
          <img
            className={styles.gridImg}
            src={elem.urlToImage}
            alt={elem.title}
          />
          <div className={styles.gridTitle}>{elem.title}</div>
        </li>
      ))}
    </ul>
  );
}
