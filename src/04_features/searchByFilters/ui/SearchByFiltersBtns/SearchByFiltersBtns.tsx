import { useSearchByFilters } from "../../model/useSearchByFilters";
import { useAppDispatch, useAppSelector } from "@/06_shared/libs/storeHooks";
import {
  applyFilters,
  resetFilters,
  setSelectedCountry,
  setSelectedGenre,
  setSelectedYear,
} from "@/05_entities/movie/model/moviesSlice";
import {
  hasSelectedFiltersSelector,
  selectedCountrySelector,
  selectedGenreSelector,
  selectedYearSelector,
} from "@/05_entities/movie/model/selectors";
import styles from "./styles.module.css";

export const SearchByFiltersBtns = () => {
  const dispatch = useAppDispatch();

  const { genres, countries, years, isLoading } = useSearchByFilters();

  const selectedGenre = useAppSelector(selectedGenreSelector);
  const selectedCountry = useAppSelector(selectedCountrySelector);
  const selectedYear = useAppSelector(selectedYearSelector);
  const hasSelectedFilters = useAppSelector(hasSelectedFiltersSelector);

  if (isLoading) {
    return <div className={styles.loader}>Загрузка фильтров...</div>;
  }

  const handleSearch = () => {
    dispatch(applyFilters());
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.title}>Поиск по фильтрам</h3>

      <div className={styles.filtersGrid}>
        <div className={styles.filterGroup}>
          <label className={styles.label}>Жанр</label>
          <select
            value={selectedGenre}
            onChange={(e) => dispatch(setSelectedGenre(e.target.value))}
            className={styles.select}
          >
            <option value="">Выберите жанр</option>
            {genres.map((genre) => (
              <option key={genre.slug} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.label}>Страна</label>
          <select
            value={selectedCountry}
            onChange={(e) => dispatch(setSelectedCountry(e.target.value))}
            className={styles.select}
          >
            <option value="">Выберите страну</option>
            {countries.map((country) => (
              <option key={country.slug} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.label}>Год</label>
          <select
            value={selectedYear}
            onChange={(e) => dispatch(setSelectedYear(e.target.value))}
            className={styles.select}
          >
            <option value="">Выберите год</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleSearch}
          disabled={!hasSelectedFilters}
          className={styles.searchButton}
        >
          Найти
        </button>

        {hasSelectedFilters && (
          <button onClick={handleReset} className={styles.resetButton}>
            Сбросить
          </button>
        )}
      </div>
    </div>
  );
};
