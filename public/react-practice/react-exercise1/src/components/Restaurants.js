import { RES_IMG } from "../utils/constants";


const Restaurants = (props) => {
    const { resData } = props;
    const {name, cuisines, costForTwo, avgRating }  = resData?.info
    return (
        <div className = "restaurant-card">
            <img src={RES_IMG+resData.info.cloudinaryImageId} alt ="Bullet Burger"/>
            <div className="card-info">
                <h3>{name}</h3>
                <h4>{(cuisines).join(', ')}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{resData.info.sla.deliveryTime} minutes</h4>
            </div>
        </div>
    );
}


export default Restaurants;