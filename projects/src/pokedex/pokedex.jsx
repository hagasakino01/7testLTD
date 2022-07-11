import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import './pokedex.css'



function PokeDex() {
    const [poke,setPoke] =useState([])
    const [loading,setLoading] =useState(false)
    const handleGetPoke = async () => {
        setLoading(true)
        axios.get('https://62a00597a9866630f80561eb.mockapi.io/v1/pokedex')
            .then(function (response) {
                // handle success
               
                setPoke(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        handleGetPoke()
    }, [])

    return (
        <div className="pokedex">
            <p className="title-pd">Pokedex</p>
            <div className="container-pd">
                {poke.map(e=>(
                    <div className="poke" key={e.id}>
                        <img src={e.image} alt="" className="img-pd" />
                        <div className="infor-pd">
                            <p className="id-pd">#{e.id}</p>
                            <p className="name-pd">Hagasakino01</p>
                            <p className="type-pd">Type:{e.type}</p>
                        </div>
                    </div>                          
                ))}
               { loading&&<div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" className="loading-pd" />
                </div>}
            </div>
        </div>
    )

}

export default PokeDex;