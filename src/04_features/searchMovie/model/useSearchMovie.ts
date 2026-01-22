import { useState } from "react";
import { useDebounce } from "@/06_shared/hooks/useDebounced";
import { useGetMovieByNameQuery } from "@/05_entities/movie/api/moviesApi";

export const useSearchMovie = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, error } = useGetMovieByNameQuery(debouncedSearch, {
    skip: debouncedSearch.length < 3,
  });

  const clearSearch = () => {
    setSearch("");
  };

  return {
    search,
    setSearch,
    clearSearch,
    debouncedSearch,
    results: data?.docs || [],
    isLoading,
    error,
    isFocused,
    setIsFocused,
  };
};
