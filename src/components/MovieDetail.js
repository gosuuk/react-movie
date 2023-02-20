import { Link } from "react-router-dom";

function MovieDetail({ title, src, description, genres, url, rating }) {
  return (
    <div>
      <h1>
        <a href={url} target="_blank">
          {title}
        </a>
      </h1>
      <img src={src} alt={title} />
      <h4>description</h4>
      <p /> {description}
      <h4>Movie Rating: {rating}</h4>
      <div>
        <h4>genres</h4>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <a href={url} target="_blank">
        상세보기 &rarr;
      </a>
      <p />
      <Link to="/home">영화 목록 이동 &rarr;</Link>
      </div>
    </div>
  );
}

export default MovieDetail;