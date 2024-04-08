import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

function MovieCard({ id, title, overview, popularity }: Props) {
  return (
    <div className="Movies-card">
      <div>
        <Link to={`/movies/${id}`}>{title}</Link>
      </div>
      <span className="Movies-card-oveview">{overview}</span>
      <div className="Movies-card-pop">{popularity}</div>
    </div>
  );
}

export default MovieCard;
