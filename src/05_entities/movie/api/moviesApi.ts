import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MoviesResponse, Movie, FiltersResponse } from "../model/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_FILTER_URL = import.meta.env.VITE_FILTERS_URL;
const MY_API_KEY = import.meta.env.VITE_X_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", MY_API_KEY);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies2025: builder.query<MoviesResponse, void>({
      query: () => ({
        url: "",
        params: {
          page: 1,
          limit: 8,
          year: 2025,
          type: "movie",
          sortField: "rating.kp",
          sortType: "-1",
          notNullFields: "poster.url",
        },
      }),
    }),
    getPopularSerials2025: builder.query<MoviesResponse, void>({
      query: () => ({
        url: "",
        params: {
          page: 1,
          limit: 8,
          year: 2025,
          type: "tv-series",
          sortField: "rating.kp",
          sortType: "-1",
          notNullFields: "poster.url",
        },
      }),
    }),
    getPopularCartoons2025: builder.query<MoviesResponse, void>({
      query: () => ({
        url: "",
        params: {
          page: 1,
          limit: 8,
          year: 2025,
          type: "cartoon",
          sortField: "rating.kp",
          sortType: "-1",
          notNullFields: "poster.url",
        },
      }),
    }),
    getRecomendMovie: builder.query<Movie, void>({
      query: () => ({
        url: "/random",
        params: {
          notNullFields: "poster.url",
          type: "movie",
          year: 2025,
          "rating.kp": "7.6-10",
        },
      }),
    }),
    getMovieById: builder.query<Movie, void>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
    getMovieByName: builder.query<MoviesResponse, string>({
      query: (name) => ({
        url: "/search",
        params: {
          page: 1,
          limit: 10,
          query: name,
          notNullFields: "poster.url",
        },
      }),
    }),
    getGenres: builder.query<FiltersResponse, void>({
      query: () => ({
        url: `${BASE_FILTER_URL}/possible-values-by-field`,
        params: {
          field: "genres.name",
        },
      }),
    }),
    getCountries: builder.query<FiltersResponse, void>({
      query: () => ({
        url: `${BASE_FILTER_URL}/possible-values-by-field`,
        params: {
          field: "countries.name",
        },
      }),
    }),
    getFilteredMovies: builder.query<
      MoviesResponse,
      { genre?: string; country?: string; year?: string }
    >({
      query: ({ genre, country, year }) => ({
        url: "",
        params: {
          page: 1,
          limit: 20,
          ...(genre && { "genres.name": genre }),
          ...(country && { "countries.name": country }),
          ...(year && { year: year }),
          sortField: "rating.kp",
          sortType: "-1",
          notNullFields: "poster.url",
        },
      }),
    }),
  }),
});

export const {
  useGetPopularMovies2025Query,
  useGetRecomendMovieQuery,
  useGetPopularSerials2025Query,
  useGetPopularCartoons2025Query,
  useGetMovieByIdQuery,
  useGetMovieByNameQuery,
  useGetGenresQuery,
  useGetCountriesQuery,
  useGetFilteredMoviesQuery,
} = moviesApi;
