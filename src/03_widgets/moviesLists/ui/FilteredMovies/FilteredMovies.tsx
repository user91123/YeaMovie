import { Link } from "react-router-dom";
import { useGetFilteredMoviesQuery } from "@/05_entities/movie/api/moviesApi";
import { MovieCard } from "@/05_entities/movie/ui";
import { useAppSelector } from "@/06_shared/libs/storeHooks";
import {
  appliedFiltersSelector,
  hasAppliedFiltersSelector,
} from "@/05_entities/movie/model/selectors";
import styles from "./styles.module.css";

export const FilteredMoviesList = () => {
  const appliedFilters = useAppSelector(appliedFiltersSelector);
  const hasAppliedFilters = useAppSelector(hasAppliedFiltersSelector);

  const { data, isLoading, error } = useGetFilteredMoviesQuery(
    {
      genre: appliedFilters.genre,
      country: appliedFilters.country,
      year: appliedFilters.year,
    },
    {
      skip: !hasAppliedFilters,
    }
  );

  if (!hasAppliedFilters) {
    return null;
  }

  if (isLoading) {
    return <div className={styles.loader}>Поиск фильмов...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки</div>;
  }

  if (!data || data.docs.length === 0) {
    return (
      <div className={styles.empty}>
        По выбранным фильтрам ничего не найдено
      </div>
    );
  }

  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.title}>Найдено фильмов: {data.total}</h2>

      <div className={styles.moviesList}>
        {data.docs.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};
