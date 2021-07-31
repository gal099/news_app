import data from '../data/data.json';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const { articles } = data;
  return (
    <ul className={styles.newsContainer}>
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
