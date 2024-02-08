import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
let API_key = `&api_key=${process.env.REACT_APP_API_KEY}`;
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

const Main = ({ addToFavorites }) => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType === "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType === "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType === "Comedie") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };
  const searchMovie = (evt) => {
    evt.preventDefault();
    let searchUrl =
      base_url +
      "/search/movie?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&query=" +
      search;
    setUrl(searchUrl);
    setSearch("");
  };

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value, pos) => {
              return (
                <li key={pos}>
                  <button
                    className="link-like-button"
                    href="#"
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </button>
                </li>
              );
            })}
            <Link className="link-like-button" to="/favorites">
              Show Favorites
            </Link>
          </ul>
        </nav>
        <form onSubmit={searchMovie}>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length === 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => (
            <Card info={res} key={pos} onAddToFavorites={addToFavorites} />
          ))
        )}
      </div>
    </>
  );
};
export default Main;
