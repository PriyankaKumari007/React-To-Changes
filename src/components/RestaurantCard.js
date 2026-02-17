import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {

  const { cloudinaryImageId, name, avgRating, cuisines } =
    resData?.info || {};

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />

      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines?.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
