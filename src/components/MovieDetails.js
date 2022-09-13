import { useQuery } from "react-query";
import { useParams } from "react-router";
import classes from "./movieDetails.module.css";

export default function MovieDetails() {
  const params = useParams();
  const { id } = params;
  const getMovieData = async () => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${id}}?api_key=a44009a74ddccc7ee7b45a80292fbc26&language=en-US`
    );
    const resp = await movieData.json();
    return resp;
  };
  const { status, isLoading, data } = useQuery("movieDetails", getMovieData);
  console.log(data);
  return (
    !isLoading && (
      <div className={classes.container}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
        <div className={classes.movieInfo}>
          <div className={classes.titles}>
            <div className={classes.titleInfo}>
              <h2>{`${data.title}:`}</h2>
              <h5>{data.tagline}</h5>
            </div>
            <h4>
              | Release Date: {`${data.release_date}`} | Duration:{" "}
              {`${data.runtime} Minutes |`}
            </h4>
            <h4>
              (Original Title: <em>{`${data.original_title}`}</em>)
            </h4>
          </div>
          <p className={classes.overview}>{data.overview}</p>
        </div>
        <div className={classes.additionalInfo}>
          <h4>{data.adult ? "Rated +18" : "Not Rated +18"}</h4>
          <h3> Rating: {data.vote_average} / 10</h3>
        </div>
      </div>
    )
  );
}
