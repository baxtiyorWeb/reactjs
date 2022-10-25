import React from "react";
import "./App.css";
import Movies from "./Movies";
function App() {

  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
          <ul>
            <li className="img">
              <a href="index.html">
                <img src="https://moviestars.to/s1.png" alt="" />
              </a>
            </li>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="index.html">GENRE</a>
            </li>
            <li>
              <a href="index.html">YEAR</a>
            </li>
            <li>
              <a href="index.html">COUNTRY</a>
            </li>
            <li>
              <a href="index.html">MOVIES</a>
            </li>
            <li>
              <a href="index.html">TV SHOWS</a>
            </li>
            <li>
              <a href="index.html">TRENDNING</a>
            </li>
          </ul>
          <div className="searchtitles">
            <h1>Moviestars - Watch Movies & TV Shows Online</h1>
            <div className="searchElement">
              <div className="fa fa-search"></div>
              <input
                type="search"
                placeholder="Enter keywords... "
                id="search"
              />
              <button className="rightArrow">
                <i className="fa-solid fa-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="videosAbout">
            <p>
              MovieStars.to is an alternative movie streaming website like
              Putlocker, 123movies, Fmovies etc. On our site you can watch
              movies and TV shows in HD absolutely for free and without sign up.
              We index various video streaming hostings daily and add new
              streaming locations to the new and existing movies. If you like
              our site and would give us your like please share our website with
              your friends!
            </p>
          </div>

          <div className="videosTitle">
            <h1>Recently Added Movies</h1>
          </div>
          <div className="videosPosition">
            <div className="movie">
              <Movies />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
