import axios from "axios";
import React from "react";
import { useState } from "react";
import './dadJokes.css'
// import API from "./service/API";




function DadJokes() {
    const [joke, setJoke] = useState()
    const [loading,setLoading]=useState(false)

    const handleClick = async () => {
        setLoading(true)
        setJoke('')
        axios.get('https://icanhazdadjoke.com/slack')
        
            .then(function (response) {
                // handle success
                setJoke(response.data.attachments[0].fallback)
                setLoading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className="dad-jokes">
            <div className="container-dj">
                <p className="title-dj">Don't Laugh Challenge</p>
                <div className="content-dj">
                    <p className="text-dj">{joke}</p>
                </div>
                {loading&&<div className="box-loading-dj">
                    <p className="loading-dj">loading...</p>
                </div>}
                <button
                    className="button-dj"
                    onClick={() => handleClick()}
                >Get  Another  Joke</button>
            </div>

        </div>
    )

}
export default DadJokes;