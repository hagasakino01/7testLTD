import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import './homeCountry.css'
import {getCountry, selectCountry, } from '../../features/country/countrySlice'
import BoxCountry from "./boxCountry/boxCountry";



function HomeCountry() {
    const [input, setInput] = useState({});
    const [continents, setcontinents] = useState({});
    const [notice,setNotice]= useState(false)
    const [loading,setLoading]= useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const listCountry = useSelector((state) => state.country.listCountry)
    const isDark = useSelector((state) => state.country.isDark)

    const handleChange = e => setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
 
    const handleSelect = e=> {
        setcontinents( e.target.value )
        
    };
    const selectContinents = async () => {
        setLoading(true)
        dispatch(getCountry([]))
        axios.get(`https://restcountries.com/v3.1/region/${continents}`)
            .then(function (response) {
                // handle success
                dispatch(getCountry(response.data))
                setNotice(false)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                handleGetCountry()  
            })
    }
    useEffect(() => {
        selectContinents()
    }, [continents])
    const handleGetCountry = async () => {
        setLoading(true)
        axios.get('https://restcountries.com/v3.1/all')
            .then(function (response) {
                // handle success
                dispatch(getCountry(response.data))
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    useEffect(() => {
        handleGetCountry()
    }, [])
    const handleClickSearch = async (data) => {
        if(data !==''){axios.get(`https://restcountries.com/v3.1/name/${data}`)
            .then(function (response) {
                // handle success
                dispatch(getCountry(response.data))
                setNotice(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                if(data !==''){
                    setNotice(true)
                }
                else{
                    handleGetCountry()
                }
            })
        }else{
            axios.get('https://restcountries.com/v3.1/all')
            .then(function (response) {
                // handle success
                dispatch(getCountry(response.data))
                setNotice(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    }
    const handleClickCountry =(data)=>{
        navigate(`in-country/`+ data)
    }

    return (
        <div className={isDark&&"home-country"||'home-country-dark'}>
           <div className="top-home-country">
                <div className="box-input-ct">
                    <input type="text" className={isDark &&"input-search-ct"||'input-search-ct-dark'} placeholder="Search for a country"
                        name="search" value={input.search || ''} onChange={handleChange}  onKeyPress={(e)=>{
                            if(e.key=== "Enter"){
                                handleClickSearch(input.search)
                            }
                        }}
                    />
                    <button className={isDark&&"button-search-ct"||'button-search-ct-dark'} onClick={()=>handleClickSearch(input.search)}>
                        <img className="img-search-ct" src={isDark&&"https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/288919654_813848152913126_1746660404316372693_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=khixrdQILuwAX9ckWCU&_nc_oc=AQnuupfV0K_V0aIuzYnH5lGCncd2Fn0ahVkGOFYxxLipYmx7W6VYdGdVBfAHUOpKA5M&_nc_ht=scontent.fhan4-3.fna&oh=03_AVJ-3UTQbdEfWvcRnwiGMuaSLzJbcWdixz8ammmQokfl5Q&oe=62E60519"||'https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/285359683_2166294930193164_8457047306022455141_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=j7dTcyOgQRUAX_G-mDa&_nc_ht=scontent.fhan3-4.fna&oh=03_AVKk562ubHnPhQHB5LcOTVEegX63w7ImqePcZRPY-rFiOg&oe=62E1E1B5'} alt="" />
                    </button>
                    
                </div>
                <div className="box-select-continents">
                    <select name="" id="" onChange={handleSelect} className={isDark && "select-continents"||'select-continents-dark'}>
                        <option value="all">filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>

           </div>
           {notice && <div className="box-notice-search-country">
                <p className="notice-search-country">The country does not exist</p>
           </div>}
           <div className="bot-home-ct">
           {listCountry.map(e => (
                <BoxCountry key={e.name.common} name={e.name} flags={e.flags} population={e.population} region={e.region} capital={e.capital} handleClickCountry={handleClickCountry}/>
                
            ))}
           {loading&&<div className="box-loading-ct">
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
            </div>}
           </div>

        </div>
    )

}
export default HomeCountry;