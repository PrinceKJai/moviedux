import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";
import MoviesGrid from "./components/MoviesGrid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Watchlist from "./components/Watchlist";
function App() {
  // const restOperator = (arg1, arg2, ...otherArgs) => {
  //   console.log("arg1", arg1);
  //   console.log("arg2", arg2);
  //   console.log("otherArgs", otherArgs);
  //   console.log("otherArgs", otherArgs[0]);
  // }
  // restOperator(2, 3, 4, 5);

  // const fruits = ["apple", "banana"];
  // const otherFruits = ["orange", "guava"];
  // const spread = [...fruits, ...otherFruits];
  // console.log("Spread opeartor", spread);

  const [movies, setMovies] = useState([]);
  const [watchList, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prevState) =>
      prevState.includes(movieId)
        ? prevState.filter((id) => id !== movieId)
        : [...prevState, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <MoviesGrid
                movies={movies}
                watchList={watchList}
                toggleWatchlist={toggleWatchlist}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                movies={movies}
                watchList={watchList}
                toggleWatchlist={toggleWatchlist}
              />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
