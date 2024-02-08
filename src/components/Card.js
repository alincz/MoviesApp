import "./styles.css";

const Card = ({ info, onAddToFavorites }) => {
  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className="movie">
        <img
          src={img_path + info.poster_path}
          className="poster"
          alt={`Poster for ${info.title}`}
        />
        <div className="movie-details">
          <div className="box">
            <h4 className="title">{info.title}</h4>
            <p className="rating">{info.vote_average}</p>
          </div>
          <div className="overview">
            <h1>Overview</h1>
            {info.overview}
            <button
              className="favorites-button"
              onClick={() => onAddToFavorites(info)}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
