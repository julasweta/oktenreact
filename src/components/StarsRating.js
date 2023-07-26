import StarRatings from "react-star-ratings";

const StarsRating = ({ rating }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        numberOfStars={10}
        name="rating"
        starDimension="12px"
        starSpacing="2px"
      />
    </div>
  );
};

export { StarsRating };
