import Movie from "./Movie";

const Movies = (props) => {
  const {movies = [] } = props;
  console.log(movies != undefined);
  return (
    <div className="movies">
      {movies != undefined ? ( movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie}/>;
      })):
      <h5>not found</h5>}
    </div>
  );
};

export default Movies;
