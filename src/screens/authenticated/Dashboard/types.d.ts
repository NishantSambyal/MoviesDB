export interface MoviesType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviesResponseType {
  results: MoviesType[]; // Assuming MoviesType is the type of each movie item
}

interface MovieListItemProps {
  item: MoviesType;
}

interface ApiProps {
  language: string;
  page: number;
}

interface DashboardScreenTypes {
  moviesList: MoviesType[];
  loading: boolean;
  loadMoreData: () => void;
  handleLogout: () => void;
}
