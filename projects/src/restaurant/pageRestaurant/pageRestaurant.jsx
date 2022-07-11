import React, { useEffect } from "react";
import axios from "axios";
import './pageRestaurant.css'
import 'antd/dist/antd.css';
import { Slider,  } from 'antd';
import { useState } from "react";
import { Checkbox } from 'antd';
import {  useSelector } from 'react-redux';
import BoxRestaurant from "./boxRestaurant/boxRestaurant";



function PageRestaurant() {

    const input = useSelector((state) => state.restaurant.input)
    
    const [loading,setLoading] = useState(false)
    const [listOriginal,setListOriginal] = useState([])
    const [listRes,setLisRes] = useState([])
    const [category,setCategory] = useState([])
    const [cuisine,setCuisine] = useState([])
    const [priceRange,setPriceRange] = useState([])
    const [starRating,setStarRating] = useState([])
    const [search,setSearch] = useState([])

    const plainOptions = [ {
        label: '',
        value: 'american',
      },
      {
        label: '',
        value: 'chinese',
      },
      {
        label: '',
        value: 'italian',
       
      },
    ];

    const handleGetRestaurant= async () => {
        setLoading(true)
        axios.get('https://62a00597a9866630f80561eb.mockapi.io/v1/tour')
            .then(function (response) {
                // handle success
               
                setLisRes(response.data)
                setListOriginal(response.data)


                setCategory(response.data)
                setCuisine(response.data)
                setPriceRange(response.data)
                setStarRating(response.data)
                setSearch(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    useEffect(() => {
        handleGetRestaurant()
    }, [])
    const onChange = (checkedValues) => {
        if(checkedValues[0]){
            let newListAmerican= listOriginal.filter((list)=> list.cuisine === checkedValues[0]  )
            let newListChinese= listOriginal.filter((list)=> list.cuisine === checkedValues[1]  )
            let newListItalian= listOriginal.filter((list)=> list.cuisine === checkedValues[2]  )
            let newList= [...newListAmerican,...newListChinese,...newListItalian]

            setCuisine(newList)
            handleFilterAll()
        }
        else{
            setCuisine(listOriginal)
            handleFilterAll()
        }
      };
    const handlePriceRange=(value)=>{
        
        let newList= listOriginal.filter((e)=> e.price >=value[0] && e.price <= value[1] )
        setPriceRange(newList)
        handleFilterAll()
    }
    const handleClickCategory=(e)=>{
        setLoading(true)
       
       let newList= listOriginal.filter((res)=> res.category ===e.target.value )
       setCategory(newList)
       handleFilterAll()
       setLoading(false)
    }
    const handleClickStartRating=(e)=>{
    
        setLoading(true)
        if(e.target.value ==='all'){
            setStarRating(listOriginal)
            handleFilterAll()
            setLoading(false)
        }
        else{
            let newList= listOriginal.filter((res)=> res.rating == e.target.value)
            setStarRating(newList)
            handleFilterAll()
            setLoading(false)
        }
     }
     const handleSearch=()=>{
        let newList= listOriginal.filter((res)=> res.title.includes(input) )
        setSearch(newList)
        handleFilterAll()
     }
     useEffect(() => {
        handleSearch()
    }, [input])
    const handleFilterAll=()=>{
        let filterCategory = listOriginal.filter(x => category.includes(x));
        let filterCuisine = filterCategory.filter(x => cuisine.includes(x));
        let filterPriceRange = filterCuisine.filter(x => priceRange.includes(x));
        let filterStarRating = filterPriceRange.filter(x => starRating.includes(x));
        let filterSearch = filterStarRating.filter(x => search.includes(x));
        setLisRes(filterSearch)
    }
    useEffect(() => {
        handleFilterAll()
    }, [category,starRating,cuisine,search,priceRange])
    



    return (
        <div className="page-restaurant">
           <div className="menu-res">
                <div className="category-res">
                    <p className="title-category-res">Category</p>
                    <div className="radio-category-res">
                        <input className="radio-input-category" label="🚩PLACES" type="radio" id="places" name="gender" value="place" onChange={(e)=>handleClickCategory(e)} />
	                    <input className="radio-input-category" label="🍕 DISHES" type="radio" id="dishes" name="gender" value="dish" onChange={(e)=>handleClickCategory(e)}/>
                    </div>

                </div>
                <div className="cuisine-res">
                    <p className="title-cuisine-res">Cuisine</p>
                    <div className="content-cuisine-res">
                        <div className="cuisine-country">
                            <p className="title-name-country">American</p>
                            <p className="title-name-country">Chinese</p>
                            <p className="title-name-country">Italian</p>
                            
                        </div>
                        <div className="cuisine-checkbox-country">
                       
                            <Checkbox.Group options={plainOptions}  onChange={onChange}  />
                        </div>
                    </div>
                </div>
                <div className="price-range-res">
                    <p className="title-price-range-res">Price Range</p>
                    <div className="container-range-res">
                       
                        <Slider className="slider-res" range defaultValue={[1000, 5000]} min={1000} max={5000} trackStyle='' onChange={(value)=>handlePriceRange(value)}   />
                    </div>
                </div>
                <div className="star-rating-res">
                    <p className="title-category-res">Star Rating</p>
                    <div className="radio-rating-res">
                        <input className="radio-input-rating" label="1🌟" type="radio" id="1" name="star" value="1" onChange={(e)=>handleClickStartRating(e)}/>
	                    <input className="radio-input-rating" label="2🌟" type="radio" id="2" name="star" value="2" onChange={(e)=>handleClickStartRating(e)}/>
	                    
                        <input className="radio-input-rating" label="3🌟" type="radio" id="3" name="star" value="3" onChange={(e)=>handleClickStartRating(e)}/>
                        <input className="radio-input-rating" label="4🌟" type="radio" id="4" name="star" value="4" onChange={(e)=>handleClickStartRating(e)}/>
                        <input className="radio-input-rating" label="5🌟" type="radio" id="5" name="star" value="5" onChange={(e)=>handleClickStartRating(e)}/>
                        <input className="radio-input-rating" label="all" type="radio" id="5" name="star" value="all" onChange={(e)=>handleClickStartRating(e)}/>
                    </div>
                </div>

           </div>
           <div className="container-right-res">
            {listRes.map(e=>(
                <BoxRestaurant coverSrc={e.coverSrc} title={e.title} serviceTime={e.serviceTime} deliveryFee={e.deliveryFee} rating={e.rating} price={e.price} key={e.coverSrc}/>
            ))}
            {loading&&<div>
                <img src={require(`.${'/images/gif/empty.gif'}`)} alt="" />
            </div>}

           </div>
        </div>

    )

}
export default PageRestaurant;