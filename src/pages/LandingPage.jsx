import { Main } from '../components/Main';
import { Sidebar1 } from '../components/Sidebar1';

import styles from './LandingPage.module.css';

export function LandingPage() {
  return (
    <main>
      <div className={styles.gridContainer}>
        <header className={styles.header}>NOTICIAS</header>
        <nav className={styles.navbar}>
          <Sidebar1 />
        </nav>
        <aside className={styles.sidebar}>SIDEBAR</aside>
        <Main className={styles.mainComponent} />
        <footer className={styles.footer}>FOOTER</footer>
      </div>
    </main>
  );
}
