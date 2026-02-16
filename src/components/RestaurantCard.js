import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } =
    props.resData.card.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="logo" />
      <h3>{console.log("srccccccccccccc", CDN_URL + cloudinaryImageId)}</h3>
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
