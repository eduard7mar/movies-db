import styles from "./Movies.module.scss";

import { connect } from "react-redux";
import { RootState } from "../../store";
import { Movie } from "../../reducers/movies";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { MovieDetails, client } from "../../api/tmdb";

export function MoviesFetch() {
  const [movies, setMovies] = useState<MovieDetails[]>([]);

  useEffect(() => {
    async function loadData() {
      const results = await client.getNowPlaying();
      setMovies(results);
    }

    loadData();
  }, []);

  return <Movies movies={movies} />;
}

interface Props {
  movies: Movie[];
}

function Movies({ movies }: Props) {
  return (
    <section>
      <div className={styles.list}>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
