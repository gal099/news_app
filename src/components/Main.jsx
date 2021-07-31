import styles from './Main.module.css';
import { MainNews } from './MainNews';
import { NewsGrid } from './NewsGrid';

export function Main() {
  return (
    <div>
      <MainNews />

      <h3 className={styles.othersTitles}>Otros Títulos</h3>

      <NewsGrid />
    </div>
  );
}
