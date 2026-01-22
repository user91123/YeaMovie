import type { RootState } from "@/01_app/providers/appStore";

export const activePopularCollectionSelector = (state: RootState): number =>
  state.movie.activePopularCollection;

export const selectedGenreSelector = (state: RootState): string =>
  state.movie.selectedGenre;

export const selectedCountrySelector = (state: RootState): string =>
  state.movie.selectedCountry;

export const selectedYearSelector = (state: RootState): string =>
  state.movie.selectedYear;

export const appliedFiltersSelector = (state: RootState) =>
  state.movie.appliedFilters;

export const hasSelectedFiltersSelector = (state: RootState): boolean =>
  Boolean(
    state.movie.selectedGenre ||
      state.movie.selectedCountry ||
      state.movie.selectedYear
  );

export const hasAppliedFiltersSelector = (state: RootState): boolean =>
  Boolean(
    state.movie.appliedFilters.genre ||
      state.movie.appliedFilters.country ||
      state.movie.appliedFilters.year
  );
