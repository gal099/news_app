import { Main } from '../components/Main';
import { Sidebar } from '../components/Sidebar';

import styles from './LandingPage.module.css';

export function LandingPage() {
  return (
    <main>
      <div className={styles.gridContainer}>
        <header className={styles.header}>NOTICIAS</header>
        <nav className={styles.navbar}>NAVBAR</nav>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <Main className={styles.mainComponent} />
        <footer className={styles.footer}>FOOTER</footer>
      </div>
    </main>
  );
}
