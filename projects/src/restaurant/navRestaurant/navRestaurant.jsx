import React, { useState } from "react";
import { useDispatch, } from 'react-redux';
import { getInput } from "../../features/restaurant/restaurantSlice";


import './navRestaurant.css'

function NavRestaurant() {

    const dispatch= useDispatch()
    const [input, setInput] = useState({});
    const handleChange = e => setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const handleSearch=()=>{
        dispatch(getInput(input.search))
    }
    return(
        <div className="navbar-restaurant">
            <div className="nav-res-container">
                <button className="button-search-res" onClick={()=>handleSearch()}>
                    <img className="img-search-res" src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/288919654_813848152913126_1746660404316372693_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=khixrdQILuwAX9ckWCU&_nc_oc=AQnuupfV0K_V0aIuzYnH5lGCncd2Fn0ahVkGOFYxxLipYmx7W6VYdGdVBfAHUOpKA5M&_nc_ht=scontent.fhan4-3.fna&oh=03_AVJ-3UTQbdEfWvcRnwiGMuaSLzJbcWdixz8ammmQokfl5Q&oe=62E60519" alt="" />
                </button>
                
                <input type="text" className='input-search-res' placeholder="Woodland Hills"
                        name="search" value={input.search || ''} onChange={handleChange}  onKeyPress={(e)=>{
                            if(e.key=== "Enter"){
                                handleSearch()
                            }
                        }}
                    />
            </div>

        </div>
        
    )
}
export default NavRestaurant;