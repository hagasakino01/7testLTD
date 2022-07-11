import { createSlice } from "@reduxjs/toolkit";



const initialState={
    listCountry:[],
    selectCountry:'',
    isDark: true
}
export const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{
        getCountry:(state, action)=>{
            state.listCountry=action.payload
        },
        selectCountry:(state, action)=>{
            state.selectCountry=action.payload
        },
        setDarkMode:(state, action)=>{
            state.isDark=action.payload
        },
    }

})
export const { getCountry, selectCountry, setDarkMode}= countrySlice.actions
export default countrySlice.reducer;