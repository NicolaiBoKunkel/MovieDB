import { useFetchUpcomingMoviesQuery } from '../store'; 
import MovieCard from './movieCard';

function UpcomingMovies() {
  const { data, error, isFetching } = useFetchUpcomingMoviesQuery();

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.filter(movie=>movie.poster_path).map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  }

  return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default UpcomingMovies;
