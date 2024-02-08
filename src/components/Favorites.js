import "./styles.css";
import { useNavigate } from "react-router-dom";

const Favorites = ({ favoriteMovies, onDelete }) => {
  let img_path = "https://image.tmdb.org/t/p/w500";

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="favorites">
      <button onClick={handleBack} className="back-button">
        Back
      </button>
      <h2 className="favorites-movies">Favorite Movies</h2>
      <div className="movies-grid">
        {favoriteMovies && favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie, index) => (
            <div key={index} className="movie">
              <img
                src={img_path + movie.poster_path}
                className="poster"
                alt={`Poster for ${movie.title}`}
              />
              <div className="movie-details">
                <div className="box">
                  <h4 className="title">{movie.title}</h4>
                  <p className="rating">{movie.vote_average}</p>
                </div>
                <div className="overview">
                  <h1>Overview</h1>
                  {movie.overview}
                  <button
                    onClick={() => onDelete(movie.id)}
                    className="favorites-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-favorites-added">No favorite movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
