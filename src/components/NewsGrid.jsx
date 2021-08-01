import { useEffect, useState } from 'react';

import styles from './NewsGrid.module.css';

export function NewsGrid() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=ar&apiKey=e0c33b0d8e844a1cb0b348063672668d'
    )
      .then((result) => result.json())
      .then((data) => setNews(data.articles));
  }, []);

  if (!news) {
    return null;
  }

  return (
    <ul className={styles.newsGridContainer}>
      {news.map((elem) => (
        <li key={elem.url} className={styles.newsCard}>
          <a href={elem.url}>
            <img
              className={styles.gridImg}
              src={elem.urlToImage}
              alt={elem.title}
            />
          </a>

          <a href={elem.url}>
            <div className={styles.gridTitle}>{elem.title}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}
