import { useParams, Link } from "react-router-dom";
import { useGetMovieByIdQuery } from "@/05_entities/movie/api/moviesApi";
import styles from "./styles.module.css";

export const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetMovieByIdQuery(id as string);

  if (isLoading) {
    return <div className={styles.loader}>Загрузка...</div>;
  }

  if (error || !data) {
    return <div className={styles.error}>Фильм не найден</div>;
  }

  const directors =
    data.persons?.filter((p) => p.enProfession === "director") || [];
  const writers =
    data.persons?.filter((p) => p.enProfession === "writer") || [];

  return (
    <div className={styles.moviePage}>
      <div className={styles.breadcrumbs}>
        <Link to="/">Главная</Link>
        <span className={styles.separator}>›</span>
        <span>Фильм описание</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.posterContainer}>
          <img
            src={data.poster?.url}
            alt={data.name || "Постер"}
            className={styles.poster}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.titleSection}>
            <h1 className={styles.title}>{data.name}</h1>
            {data.alternativeName && (
              <p className={styles.altTitle}>{data.alternativeName}</p>
            )}
          </div>

          <div className={styles.rating}>
            <div className={styles.ratingBlock}>
              <span className={styles.ratingLabel}>КиноПоиск</span>
              <span className={styles.ratingValue}>
                {data.rating.kp.toFixed(1)}/10
              </span>
            </div>
            {data.rating.imdb > 0 && (
              <div className={styles.ratingBlock}>
                <span className={styles.ratingLabel}>IMDb</span>
                <span className={styles.ratingValue}>
                  {data.rating.imdb.toFixed(1)}/10
                </span>
              </div>
            )}
          </div>

          <p className={styles.description}>
            {data.shortDescription || data.description}
          </p>

          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>О фильме</h2>

            <div className={styles.detailsGrid}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Жанр:</span>
                <span className={styles.detailValue}>
                  {data.genres.map((g) => g.name).join(", ")}
                </span>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Страна:</span>
                <span className={styles.detailValue}>
                  {data.countries.map((c) => c.name).join(", ")}
                </span>
              </div>

              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Год:</span>
                <span className={styles.detailValue}>{data.year}</span>
              </div>

              {directors.length > 0 && (
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Режиссер:</span>
                  <span className={styles.detailValue}>
                    {directors.map((d) => d.name).join(", ")}
                  </span>
                </div>
              )}

              {writers.length > 0 && (
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Сценарий:</span>
                  <span className={styles.detailValue}>
                    {writers.map((w) => w.name).join(", ")}
                  </span>
                </div>
              )}

              {data.movieLength && (
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Продолжительность:</span>
                  <span className={styles.detailValue}>
                    {data.movieLength} мин
                  </span>
                </div>
              )}

              {data.ageRating && (
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Возраст:</span>
                  <span className={styles.detailValue}>{data.ageRating}+</span>
                </div>
              )}
            </div>
          </div>

          {data.description && data.description !== data.shortDescription && (
            <div className={styles.fullDescription}>
              <p>{data.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
