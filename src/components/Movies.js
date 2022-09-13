import { useQueryClient, useQuery } from "react-query";
import MovieCarousel from "./MovieCarousel";
import classes from "./movies.module.css";
import Roster from "./Roster";

export default function Movies() {
  const queryClient = useQueryClient();

  const getMovieData = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a44009a74ddccc7ee7b45a80292fbc26&language=en-US&page=1"
    );
    const data = await movieData.json();
    return data;
  };
  const { status, isLoading, data } = useQuery(
    "popularMovieData",
    getMovieData
  );

  return (
    <div className={classes.main}>
      {!isLoading && <MovieCarousel data={data} />}
      {!isLoading && <Roster />}
    </div>
  );
}
