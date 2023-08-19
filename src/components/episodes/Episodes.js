import React, { useEffect } from "react";
import { episodeActions } from "../../redux/slices/episodesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Episode } from "./Episode";

const Episodes = () => {
  const { episodes, pages, page } = useSelector((state) => state.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(episodeActions.all());
  }, [dispatch]);

  useEffect(() => {
    dispatch(episodeActions.allOnPage(page));
  }, [dispatch, page]);


  return (
    <>
      <div className="items">{episodes && episodes.map((episode) => <Episode key={episode.id} episode={episode} />)}</div>
      <div className="buttons">
        <button onClick={() => dispatch(episodeActions.setPageBack())} className="button">
        &#8592; {page !==1 ? page-1 : 0}
        </button>
        <span> page: {page} </span>
        <button onClick={() => dispatch(episodeActions.setPageForward())} className="button">
        {page < pages ? page+1 : 4} &#8594;
        </button>
      </div>
    </>
  );
};

export { Episodes };
