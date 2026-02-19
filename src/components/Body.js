import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
 const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; //optional chaining
    console.log("restaurants", restaurants);

    setListOfRestaurants(restaurants);
  };

  if (listOfRestaurants.length === 0) {
    //conditional rendering
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 b-4 border-amber-600">
          <input
            type="text"
            className="search-box bg-gray-200 p-2 m-2 border-2 border-blue-400 rounded"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="search-btn bg-blue-500 text-white p-2 m-2 rounded"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase()),
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>

            <button
          className="search-btn bg-blue-500 text-white p-2 m-2 rounded"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      
      </div>

      <div className="flex flex-wrap">
        {
        listOfRestaurants.map((restaurant, index) => (
          <Link key={index} to={"/restaurant/" + restaurant.cta.link}>
          { 
            restaurant.info.isOpen ? (
          <PromotedRestaurantCard key={index} resData={restaurant} />
        ) : ( 
          <RestaurantCard key={index} resData={restaurant} />
        ) }
        </Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
