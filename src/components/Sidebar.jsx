import { useEffect, useState } from 'react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=ar&category=sports&pageSize=5&apiKey=e0c33b0d8e844a1cb0b348063672668d'
    )
      .then((result) => result.json())
      .then((data) => setNews(data.articles));
  }, []);

  if (!news) {
    return null;
  }

  return (
    <ul className={styles.newsContainer}>
      <h3 className={styles.newsContainerTitle}>DEPORTES</h3>
      {news.map((elem, i) => (
        <li className={styles.newsCard}>
          <a href={elem.url} key={elem.url}>
            <img
              className={styles.newsCardImg}
              src={elem.urlToImage}
              alt={elem.title}
            />
            <div className={styles.newsCardTitle}>{elem.title}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}
