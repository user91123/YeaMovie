import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppliedFilters {
  genre: string;
  country: string;
  year: string;
}

interface MovieState {
  activePopularCollection: number;
  selectedGenre: string;
  selectedCountry: string;
  selectedYear: string;
  appliedFilters: AppliedFilters;
}

const initialState: MovieState = {
  activePopularCollection: 0,
  selectedGenre: "",
  selectedCountry: "",
  selectedYear: "",
  appliedFilters: {
    genre: "",
    country: "",
    year: "",
  },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    changePopularCollection(state, action: PayloadAction<number>) {
      state.activePopularCollection = action.payload;
    },

    setSelectedGenre(state, action: PayloadAction<string>) {
      state.selectedGenre = action.payload;
    },

    setSelectedCountry(state, action: PayloadAction<string>) {
      state.selectedCountry = action.payload;
    },

    setSelectedYear(state, action: PayloadAction<string>) {
      state.selectedYear = action.payload;
    },

    applyFilters(state) {
      state.appliedFilters = {
        genre: state.selectedGenre,
        country: state.selectedCountry,
        year: state.selectedYear,
      };
    },

    resetFilters(state) {
      state.selectedGenre = "";
      state.selectedCountry = "";
      state.selectedYear = "";
      state.appliedFilters = {
        genre: "",
        country: "",
        year: "",
      };
    },
  },
});

export const {
  changePopularCollection,
  setSelectedGenre,
  setSelectedCountry,
  setSelectedYear,
  applyFilters,
  resetFilters,
} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;
