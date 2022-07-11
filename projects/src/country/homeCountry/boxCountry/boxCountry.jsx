
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";




function BoxCountry(props) {

   
    const isDark = useSelector((state) => state.country.isDark)

    const handleClickCountry =(data)=>{
        
      

        
        Navigate(`in-country/`+ data)
        
    }
    return (
        <div className={isDark &&"box-country"||'box-country-dark'}
                    onClick={()=>props.handleClickCountry(props.name.common)}
                >
                    <img className="img-country" src={props.flags.png} alt="" />
                    <p className={isDark&&"name-country-home"||'name-country-home-dark'}>{props.name.common}</p>
                    <div className={isDark&&"box-infor-country-home"||'box-infor-country-home-dark'}>
                        <div className="population-country-home">
                            <p className="title-properties">Population:</p>
                            <p className="name-properties">{props.population}</p>
                             
                        </div>
                        <div className="region-country-home">
                            <p className="title-properties"> Region:</p>
                            <p className="name-properties"> {props.region}</p>
                            
                        </div>
                        <div className="capital-country-home">
                            <p className="title-properties"> Capital: </p>
                            <p className="name-properties"> {props.capital}</p>
                            
                        </div>
                    </div>
                </div>

    )

}
export default BoxCountry;