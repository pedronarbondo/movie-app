import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./movieCarousel.module.css";
import classes from "./movieCarousel.module.css";

export default function MovieCarousel(props) {
  const { data } = props;

  const [index, setIndex] = useState(0);
  const [movieData, setMovieData] = useState(data);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    movieData?.results.map((movie) => {
      setCarouselData((prevData) => {
        return [
          ...prevData,
          {
            title: movie.title,
            rating: `${movie.vote_average} / 10`,
            image: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            overview: movie.overview,
          },
        ];
      });
    });
  }, [data]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselData[0]?.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={classes.title}>{carouselData[0]?.title}</h3>
          <p className={classes.overview}>{carouselData[0]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselData[1]?.image}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={classes.title}>{carouselData[1]?.title}</h3>
          <p className={classes.overview}>{carouselData[1]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselData[2]?.image}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={classes.title}>{carouselData[2]?.title}</h3>
          <p className={classes.overview}>{carouselData[2]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselData[3]?.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={classes.title}>{carouselData[3]?.title}</h3>
          <p className={classes.overview}>{carouselData[3]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselData[4]?.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={classes.title}>{carouselData[4]?.title}</h3>
          <p className={classes.overview}>{carouselData[4]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselData[5]?.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={classes.title}>{carouselData[5]?.title}</h3>
          <p className={classes.overview}>{carouselData[5]?.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
