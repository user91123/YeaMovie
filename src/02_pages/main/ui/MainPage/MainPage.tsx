import {
  RecomendMovie,
  PopularCartoons,
  PopularMovies,
  PopularSerials,
  FilteredMoviesList,
} from "@/03_widgets/moviesLists/ui";
import { PopularBtns } from "@/04_features/popularCollections/ui";
import { SearchByFiltersBtns } from "@/04_features/searchByFilters";
import { activePopularCollectionSelector } from "@/05_entities/movie/model/selectors";
import { useAppSelector } from "@/06_shared/libs/storeHooks";

export const MainPage = () => {
  const activeCollection = useAppSelector(activePopularCollectionSelector);

  return (
    <>
      <RecomendMovie />
      <SearchByFiltersBtns />
      <FilteredMoviesList />
      <PopularBtns />
      {activeCollection === 0 && <PopularMovies />}
      {activeCollection === 1 && <PopularSerials />}
      {activeCollection === 2 && <PopularCartoons />}
    </>
  );
};
