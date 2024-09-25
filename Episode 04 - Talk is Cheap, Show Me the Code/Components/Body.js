import RestaurantCard from "./RestaurantCard";
import {useState} from "react"
import {restaurantList} from "../utlis/Constant"
// console.log(restaurantList,'list')
const Body = () => {
  let [listRestaurant,setlistRestaurant] = useState(restaurantList)

    return (
      <div className="body">
        <div className="search-bo">
         <button
         className="filter-btn"
         onClick={()=>{
            // console.log("You just entered the button")
            const filteredList = listRestaurant.filter((val)=>val.info.avgRating>=4.3)
            setlistRestaurant(filteredList)
           
         }}
         > Top Rated Restaurant
         </button>
        </div>
        <div className="restaurant-container">
          {listRestaurant.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          ))}
        </div>
      </div>
    );
  };
export default Body