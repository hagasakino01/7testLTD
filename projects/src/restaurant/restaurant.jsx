import React from "react";
import NavRestaurant from "./navRestaurant/navRestaurant";
import PageRestaurant from "./pageRestaurant/pageRestaurant";





function Restaurant() {

    return (
        <div className="restaurant">
           <NavRestaurant />
           <PageRestaurant />
        </div>
    )

}
export default Restaurant;