import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src="/cinema-ico.png" className={styles.logo} alt="logo" />
        <h4>The Movies DB</h4>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
