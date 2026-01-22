import { useGetRecomendMovieQuery } from "@/05_entities/movie/api/moviesApi";
import styles from "./styles.module.css";
import { MovieCard } from "@/05_entities/movie/ui";
import { Link } from "react-router-dom";

export const RecomendMovie = () => {
  const { data, isLoading, error } = useGetRecomendMovieQuery();

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
    <section className={styles.recommendSection}>
      <h2 className={styles.title}>Советуем посмотреть:</h2>
      <div className={styles.content}>
        <div className={styles.description}>
          <h3 className={styles.movieTitle}>{data.name || "Без названия"}</h3>
          <p className={styles.movieDescription}>
            {data.shortDescription ||
              data.description ||
              "Описание отсутствует"}
          </p>
          <Link to={`/movie/${data.id}`}>
            <button className={styles.watchButton}>Смотреть</button>
          </Link>
        </div>
        <MovieCard movie={data} className={styles.recommendMovieCard} />
      </div>
    </section>
  );
};
