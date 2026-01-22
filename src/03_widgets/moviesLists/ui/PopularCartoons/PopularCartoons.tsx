import { useGetPopularCartoons2025Query } from "@/05_entities/movie/api/moviesApi";
import styles from "./styles.module.css";
import { MovieCard } from "@/05_entities/movie/ui";

export const PopularCartoons = () => {
  const { data, isLoading, error } = useGetPopularCartoons2025Query();

  //обработать нормально состояния

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
    <div className={styles.popularCartoonsList}>
      {data?.docs.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};
