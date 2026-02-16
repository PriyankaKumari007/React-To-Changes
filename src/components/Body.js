import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";
import { useState } from "react";


const Body = () => {

 const [listOfRestaurants, setListOfRestaurants] = useState(resList); 
  return (
    <div className="body">
      {/* <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </div> */}

      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listOfRestaurants.filter(res => res.card.info.avgRating > 4);
          setListOfRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
            //do not forget to add key 
            //do not add index as key because it will create problem when we will delete or add restaurant in list
          <RestaurantCard key={restaurant.card.info.id} resData={restaurant} />
        ))}
       
      </div>
    </div>
  );
};

export default Body;