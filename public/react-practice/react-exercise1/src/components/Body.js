import { useEffect, useState } from "react";
import Restaurants from "./Restaurants";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const [filteredList, setfilteredList] = useState([]);   //update this restaurant.

    const [inputText, setInputText] = useState("");

    useEffect(() => { fetchData();}, []);

    const fetchData = async () => {   //fetch returns a promise so using async await we can use .then also. but this is latest feature added.
            // unable to use live api due to CORS issue.

            setListOfRestaurant(restaurantList);   // update data for re-rendering when useEffect is executed.
            setfilteredList(restaurantList);  // this is used for updated list lists only.
    }

    if(listOfRestaurant.length === 0) {
        <Shimmer/>
    }
    return (
        <div>
            <div className = "search-container">
                <input type="text" placeholder="search restaurant" value = {inputText} onChange={(e)=>{
                    setInputText(e.target.value);
                }}></input>
                <button 
                onClick = {
                    () => {
                        const filteredRes= listOfRestaurant.filter((list) => list.info.name.toLowerCase().includes(inputText.toLowerCase()));
                        setfilteredList(filteredRes);
                    }
                }> Search </button>
                <button 
                onClick = {
                    () => {
                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.0);
                        setfilteredList(filteredList);
                    }
                }> Top Rated Restaurants </button>
            </div>
            <div className ="res-list">
                {
                    filteredList.map((restaurant) => <Restaurants key ={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
        
    );
}

export default Body;