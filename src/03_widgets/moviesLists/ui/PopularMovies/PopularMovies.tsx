import { useGetPopularMovies2025Query } from "@/05_entities/movie/api/moviesApi";
import styles from "./styles.module.css";
import { MovieCard } from "@/05_entities/movie/ui";
import { Link } from "react-router-dom";

export const PopularMovies = () => {
  const { data, isLoading, error } = useGetPopularMovies2025Query();

  if (isLoading) {
    return <div className={styles.loader}>Загрузка рекомендации...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки</div>;
  }

  if (!data) {
    return <div className={styles.empty}>Фильм не найден</div>;
  }

  return (
    <div className={styles.popularMoviesList}>
      {data?.docs.map((movie) => {
        return (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        );
      })}
    </div>
  );
};
