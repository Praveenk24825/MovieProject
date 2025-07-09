import { useState, useEffect } from "react";
import { fetchMovies } from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("john wick");
  const [type, setType] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      const data = await fetchMovies(query, page, type);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
        setError("");
      } else {
        setError(data.Error || "No results found");
        setMovies([]);
      }
    };
    load();
  }, [query, page, type]);

  const totalPages = Math.ceil(totalResults / 10);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim();
    if (value) {
      setQuery(value);
      setPage(1);
    }
  };


  return (
    <div className="container">
      <form className="search-bar" onSubmit={handleSearch}>
        <input name="search" type="text" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>

      <select
        className="filter-dropdown"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>

      {error && <p>{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-title">{movie.Title}</div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages).keys()].map((i) => (
            <button key={i} onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
