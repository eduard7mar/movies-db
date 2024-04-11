import styles from "./Movies.module.scss";

import { connect, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Movie, moviesLoaded, moviesLoading } from "../../reducers/movies";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { client } from "../../api/tmdb";

interface Props {
  movies: Movie[];
  loading: boolean;
}

function Movies({ movies, loading }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      dispatch(moviesLoading());

      const config = await client.getConfiguration();
      const imageUrl = config.images.base_url;
      const results = await client.getNowPlaying();

      const mappedResults: Movie[] = results.map((m) => ({
        id: m.id,
        title: m.title,
        overview: m.overview,
        popularity: m.popularity,
        image: m.backdrop_path
          ? `${imageUrl}w780${m.backdrop_path}`
          : undefined,
      }));

      dispatch(moviesLoaded(mappedResults));
    }

    loadData();
  }, [dispatch]);

  return (
    <section>
      <div className={styles.list}>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          movies.map((m) => (
            <MovieCard
              key={m.id}
              id={m.id}
              title={m.title}
              overview={m.overview}
              popularity={m.popularity}
              image={m.image}
            />
          ))
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
  loading: state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
