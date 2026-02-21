import {useEffect,useState} from "react";
import{restaurantMenuMockData} from "../utils/resMenuData";
const RestaurantMenu =()=>{

     const [menuData, setMenuData] = useState(restaurantMenuMockData);
    return(
        <div className="menu-container p-4 m-4 bg-gray-100 rounded border border-black">
            {menuData.restaurant.map((item) => (
                <div
                    key={item.id}
                    className="menu-card p-4 m-4 bg-white rounded border border-gray-300 shadow-md"
                >
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm">Price: ₹{item.price}</p>
                    <p className="text-sm">Description: {item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default RestaurantMenu;