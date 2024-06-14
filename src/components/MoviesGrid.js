import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All genre");
  const [rating, setRating] = useState("All");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  // useEffect(() => {
  //     if(searchTerm.length > 0) {
  //         const searchedMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  //         setMovies(searchedMovies);
  //         console.log("searchedMovies", searchedMovies);
  //     } else if(searchTerm.length === 0){
  //         setMovies(movies);
  //     }
  // }, [searchTerm]);

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) && matchesSearchTerm(movie, searchTerm)
  );

  console.log("filteredMovies", filteredMovies);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genres</label>
          <select
            className="filter-dropdown"
            onChange={handleGenreChange}
            value={genre}
          >
            <option>All Genres</option>
            <option>Horror</option>
            <option>Drama</option>
            <option>Action</option>
            <option>Fantasy</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            onChange={handleRatingChange}
            value={rating}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
