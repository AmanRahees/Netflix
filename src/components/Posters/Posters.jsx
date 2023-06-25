import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import instance from "../../axios";
import Youtube from "react-youtube";
import "./Posters.css";

function Posters(props) {
  const [movies, setMovie] = useState();
  const [Urlid, setUrlId] = useState("");
  useEffect(() => {
    instance.get(props.url).then((response) => {
      setMovie(response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    instance
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Trailer not Available");
        }
      });
  };

  return (
    <div className="row mt-3">
      <h2 className="font-semibold text-2xl">{props.title}</h2>
      <div className="posters">
        {movies
          ? movies.map((obj) => (
              <img
                onClick={() => handleMovie(obj.id)}
                className={props.isSmall ? "poster-sm" : "poster"}
                key={obj.id}
                src={`${imageUrl + obj.poster_path}`}
                alt=""
              />
            ))
          : ""}
      </div>
      {Urlid && <Youtube opts={opts} videoId={Urlid.key}></Youtube>}
    </div>
  );
}

export default Posters;
