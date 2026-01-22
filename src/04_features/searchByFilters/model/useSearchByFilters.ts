import {
  useGetCountriesQuery,
  useGetGenresQuery,
} from "@/05_entities/movie/api/moviesApi";

export const useSearchByFilters = () => {
  const { data: genresData, isLoading: genresLoading } = useGetGenresQuery();
  const { data: countriesData, isLoading: countriesLoading } =
    useGetCountriesQuery();

  const genres = genresData || [];
  const countries = countriesData || [];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 26 }, (_, i) => currentYear - i);

  return {
    genres,
    countries,
    years,
    isLoading: genresLoading || countriesLoading,
  };
};
