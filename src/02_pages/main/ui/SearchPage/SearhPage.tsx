import { useSearchParams, Link } from "react-router-dom";
import { useGetMovieByNameQuery } from "@/05_entities/movie/api/moviesApi";
import { MovieCard } from "@/05_entities/movie/ui";
import styles from "./styles.module.css";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, isLoading, error } = useGetMovieByNameQuery(query, {
    skip: query.length < 3,
  });

  if (query.length < 3) {
    return (
      <div className={styles.emptyState}>
        Введите минимум 3 символа для поиска
      </div>
    );
  }

  if (isLoading) {
    return <div className={styles.loader}>Поиск...</div>;
  }

  if (error || !data) {
    return <div className={styles.error}>Ошибка поиска</div>;
  }

  if (data.docs.length === 0) {
    return (
      <div className={styles.emptyState}>
        По запросу "{query}" ничего не найдено
      </div>
    );
  }

  return (
    <>
      {" "}
      <div className={styles.breadcrumbs}>
        <Link to="/">Главная</Link>
        <span className={styles.separator}>›</span>
        <span>Фильмы по поиску</span>
      </div>
      <div className={styles.searchPage}>
        <h1 className={styles.title}>Результаты поиска: "{query}"</h1>

        <div className={styles.resultsList}>
          {data.docs.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
