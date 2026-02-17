import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");


  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   console.log(json);
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; //optional chaining
      console.log("restaurants", restaurants);

    setListOfRestaurants(restaurants);
  };

if(listOfRestaurants.length === 0){  //conditional rendering
  return <Shimmer />;
}

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
          </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant,index) => (
          <RestaurantCard
            key={index}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};


export default Body;