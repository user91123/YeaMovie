import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <div className={styles.logo}>KINOMONSTER</div>
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navLink}>
          Главная
        </NavLink>
        <NavLink to="/" className={styles.navLink}>
          Популярные фильмы
        </NavLink>
        <NavLink to="/" className={styles.navLink}>
          Популярные сериалы
        </NavLink>
      </nav>
    </footer>
  );
};
