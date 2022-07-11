import { createSlice } from "@reduxjs/toolkit";



const initialState={
    input:'',
    
}
export const restaurantSlice = createSlice({
    name:'restaurant',
    initialState,
    reducers:{
        getInput:(state, action)=>{
            state.input=action.payload
        },
    }

})
export const { getInput,}= restaurantSlice.actions
export default restaurantSlice.reducer;