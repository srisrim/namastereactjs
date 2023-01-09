import RestaurantCard from "./ReastaurantCard";
import { restaurantData } from "../constants";
import React, { useState } from "react";


const BodyComponent = () => {
    const [searchTxt, setSearchTxt] = useState("adfdsf");
    const [restaurants, setRestaurants] = useState(restaurantData);
    return (
        <React.Fragment>
            <div className="search-container">
                <input type="text"
                    className="search-input"
                    placeholder="search"
                    value={searchTxt}
                    onChange={
                        (e) => setSearchTxt(e.target.value)
                    } />
                <button onClick={
                    () => {
                        const filteredData = filterData(searchTxt, restaurants);
                        setRestaurants(filteredData);
                    }
                }>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                        // up above we actually providing the individual props by just using spred operatopr(...), so in genenral
                        // it does same as <RestaurantCard name={restaurantData[0].data.name} cusines={restaurantData[0].data.cusines} />
                    })
                }
            </div>
        </React.Fragment >
    )
}

function filterData(searchText, restaurants) {
    if (searchText) {
        const filteredData = restaurants?.filter((restaurant) =>
            restaurant.data.name.toLowerCase().includes(searchText)
        )
        return filteredData;
    } else {
        return restaurantData;
    }
}

export default BodyComponent;