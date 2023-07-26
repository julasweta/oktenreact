import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiService } from "../services/ApiService";

const PosterPreview = () => {
  const params = useParams();
  const [image, setImage] = useState();
  const [transyt, setTransyt] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      const allImage = await apiService.image(params.id);
      setImage(allImage);
    };
    fetchMovie();
  }, [params.id]);

  return (
    <div className="poster_preview">
      {image &&
        image.backdrops.map((item, index) => (
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
            alt="gg"
            onClick={() => setTransyt(!transyt)}
            className={transyt ? "transition" : ""}
            key={index}
          ></img>
        ))}
    </div>
  );
};

export { PosterPreview };
