export interface Movie {
  id: number;
  name: string | null;
  alternativeName: string | null;
  type: string;
  typeNumber: number;
  year: number;
  description: string | null;
  shortDescription: string | null;
  status: string | null;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number | null;
  totalSeriesLength: number | null;
  seriesLength: number | null;
  ratingMpaa: string | null;
  ageRating: number | null;
  poster?: {
    url: string;
    previewUrl: string;
  };
  backdrop?: {
    url: string;
    previewUrl: string;
  } | null;
  genres: Array<{
    name: string;
  }>;
  countries: Array<{
    name: string;
  }>;
  isSeries: boolean;
  ticketsOnSale: boolean;

  logo?: {
    url: string;
  } | null;
  slogan?: string | null;
  persons?: Array<{
    id: number;
    name: string;
    photo: string;
    profession: string;
    enProfession?: string;
  }>;
  budget?: {
    value: number;
    currency: string;
  } | null;
  fees?: {
    world?: {
      value: number;
      currency: string;
    } | null;
    russia?: {
      value: number;
      currency: string;
    } | null;
  };
}

export interface MoviesResponse {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface FilterValue {
  name: string;
  slug: string;
}

export type FiltersResponse = FilterValue[];
