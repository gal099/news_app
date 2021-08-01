import { useEffect, useState } from 'react';

import styles from './MainNews.module.css';

export function MainNews() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=ar&category=business&pageSize=1&apiKey=e0c33b0d8e844a1cb0b348063672668d'
    )
      .then((result) => result.json())
      .then((data) => setNews(data.articles[0]));
  }, []);

  if (!news) {
    return null;
  }

  return (
    <div className={styles.mainNewsContainer}>
      <img className={styles.mainImg} src={news.urlToImage} alt={news.title} />
      <div>
        <h2 className={styles.mainTitle}>{news.title}</h2>
        <p className={styles.mainDescription}>{news.description} </p>
      </div>
    </div>
  );
}
