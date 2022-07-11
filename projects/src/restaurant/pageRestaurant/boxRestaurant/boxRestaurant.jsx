import React from "react";






function BoxRestaurant(props) {

    return (
        <div className="box-res" key={props.key}>
        <img className="img-res" src={require(`.${props.coverSrc}`)} alt="" />
        <div className="profile-res">
            <div className="left-profile">
                <p className="name-res">{props.title}</p>
                <div className="left-bot-profile">
                    <p className="time-res">{props.serviceTime}</p>
                    <p className="delivery-res">Delivery Free:{props.deliveryFee}</p>
                </div>
            </div>
            <div className="right-profile">
                <div className="box-star-res">
                    <p className="star-res">{props.rating}🌟</p>
                </div>
                <p className="total-res">${props.price}</p>
            </div>
        </div>
    </div>

    )

}
export default BoxRestaurant;