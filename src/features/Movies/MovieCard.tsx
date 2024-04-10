import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  popularity: number;
  overview: string;
}

function MovieCard({ id, title, overview, popularity, image }: Props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.thumbnail}
        src={image}
        alt="Movie thumbnail"
      />
      <div className={styles.content}>
        <div>
          <Link to={`/movies/${id}`}>{title}</Link>
        </div>
        <span className={styles.overview}>{overview}</span>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}

export default MovieCard;
