import styles from "./styles.module.css";
import type { Movie } from "../../model/types";

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export const MovieCard = ({ movie, className }: MovieCardProps) => {
  return (
    <div className={className || styles.movieCard}>
      <img
        className={styles.moviePoster}
        src={movie.poster?.url}
        alt={movie?.name || "Без названия"}
      />
      <h3 className={styles.movieTitle}>
        {movie.name ?? movie.alternativeName ?? "Без названия"}
      </h3>
      <div className={styles.movieInfo}>
        <p className={styles.movieYear}>{movie?.year}</p>
        <p className={styles.movieRating}>{movie.rating?.kp.toFixed(1)}</p>
      </div>
    </div>
  );
};
