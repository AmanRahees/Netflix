import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import instance from "../../axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    instance
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div
      className="Banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-btns">
          <button className="button">Play</button>
          <button className="button">Mylist</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom">{/* <kasdfj></kasdfj> */}</div>
    </div>
  );
}

export default Banner;
