import { useState } from "react";
import Restaurants from "./Restaurants";
import restaurantList from "../utils/mockData"

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

    return (
        <div>
            <div className = "search-container">
                <input placeholder="search restaurant"></input>
                <button onClick = {
                    () => {
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.0);
                        setListOfRestaurant(filteredList);
                    }
                }> Search </button>
            </div>
            <div className ="res-list">
                {
                    listOfRestaurant.map((restaurant) => <Restaurants key ={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
        
    );
}

export default Body;