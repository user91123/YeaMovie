import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { SearchMovieInput } from "@/04_features/searchMovie";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>KINOMONSTER</div>
      </Link>
      <SearchMovieInput />
    </div>
  );
};
