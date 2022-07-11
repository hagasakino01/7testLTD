import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../features/country/countrySlice';
import restaurantReducer from "../features/restaurant/restaurantSlice";



export const store = configureStore({
    reducer: {
        
        country: countryReducer,
        restaurant: restaurantReducer,
    },
});