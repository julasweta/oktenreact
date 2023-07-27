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
    <>
      <div className="transition-container">
        {image &&
          image.backdrops.map((item, index) => (
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
              alt="poster"
              onClick={() => setTransyt(transyt === item.file_path ? null : item.file_path)} // Змінюємо стан transyt на item.file_path або null, якщо вже було вибрано
              className={transyt === item.file_path ? "transition" : ""}
              key={item.file_path}
            ></img>
          ))}
      </div>
      {transyt && <div className="dark-overlay"></div>}
    </>
  );
};

export { PosterPreview };
