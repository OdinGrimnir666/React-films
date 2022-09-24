import { useEffect } from "react";
import { useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
const API_LEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_LEY}9&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const searchMovis = (str = "matrix", type = "all") => {
    if (str != null) {
      setLoading(true);
      fetch(
        `http://www.omdbapi.com/?apikey=bb40fcc9&s=${str}${
          type === "all" ? "" : `&type=${type}`
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.Search);
          setLoading(false);
        });
    }
  };
  console.log(movies);

  return (
    <main className="container content">
      <Search searchMovis={searchMovis} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};
export default Main;
