import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Movies.css'





function Movies() {
    const [movie,setMovie] =useState([])
    const handleGetMovies = async () => {
        axios.get('https://62a00597a9866630f80561eb.mockapi.io/v1/movies')
            .then(function (response) {
                // handle success
                setMovie(response.data)
             
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    useEffect(() => {
        handleGetMovies()
    }, [])

    return (
        <div className="movies">
            <div className="nav-movies">
                <div className="box-logo-movies">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIIEhASEhIWEA8SDA8ZDxgZDxIPDw8QJSEZJxkUFiQcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMDw8QHQ8PEDQdGB0xMTQxMTExMTE/MTExMTE/MTQ/MTQxMTQxMTQ/NDQxMTE0MTExNDQxMTE0MTExMTExMf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwYHAgQFAQj/xABLEAABAwEEAwwECQoGAwAAAAACAAEDBAUGERIHMnITFCEiMTNBU3STsbJScXOSFSM1QkNRYoGRFyQ0RGGCosLR8FRjhLPB0hY2Vf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABsRAQEAAwEBAQAAAAAAAAAAAAABESExQQJR/9oADAMBAAIRAxEAPwCG11ZKMszbtJz8v0knpJG/Jetk72RFdzs/aJfMSQgfvyXrZO9kRvyXrZO9kSEIH78l62TvZEb8l62TvZEhCB+/Jetk72RG/Jetk72RIQgfvyXrZO9kRvyXrZO9kSEIH78l62TvZEb8l62TvZEhexgUr5QEjL0REjL8GQO35L1sneyI35L1sneyLpU91bQqcMlHLg/SQjF5lvDcC0y+gZvXNEgj+/Jetk72RG/Jetk72RSA7g2mH6uz+qaJc2qu3W0rYyUkot9Yhn8qDR35L1sneyI35L1sneyJD8V3Z+B25WfikhA/fkvWyd7IjfkvWyd7IkIQP35L1sneyI35L1sneyJCED9+S9bJ3siN+S9bJ3siQhA/fkvWyd7IjfkvWyd7IkIQP35L1sneyLKKslzD8dJrdZItZMi1g2x8UGddzs/aJfMSQn13Oz9ol8xJCAQhCAQhCAQhOo6SSukCOMCOUywARQJUgu/dGrtvAgj3OJ/nnqqd3auFBZINPWuJyNxnB+ahWtePSSFO5R0QMbtwboWoOw39UG9Z2j2gsoN0qj3V25XMskf9/eny30sqwmcIGB8OiGFVJaNpT2mTnUSnK/1EXEHZZaaCzKrSs/DuVJ78i50mlCsfVhhBQRCCeRaUawdaCEveFdSi0qi+DS0pD+0JFV6EF0DeGx7xNlmaIn+qUBAloWto1pqps9JI8RPyM5ZwL/lVMunY9v1VjOzwTEI9IOWYC+50GduXeqbDf4+N2B+Qx4wEuSrfsG/tNbQ7jWRjEZcDsXGjkXMvbo71pqHp4Xhzf7aCs0L0wcHcSZ2JiwdnHKQkvEAhCEAhCEAmRawbY+KWmRawbY+KDOu52ftEvmJIT67nZ+0S+YkhAIQhAIQso4ykIQFnInIWBm1iJ0GxZtnyWnIEUIuchcDN/MSuKy7LpLi0zySEzyuPHkfWMvRjS7tWPDcykKeodmlcMZz1vUAKr7zXglt+YpDd2jYsIA6oVRs3qvXPeE3Z3cKbNxI2/nUeQhQCEIQCEIQCE2mpyqjEAbEyLBuNlU4g0Y1JREckgDKwYgCCBNw4MzYu/IzLPcyHFnZxduVn4pKydH9VS0EjwVFMEFYPA0hDmKRZ6SqagkYpBlAK1uUB426IKxdsMWUyubfiSxyGKd3kpX/eOnUOJ8ViguK911YryxNVUrju7hixDq1AqoJoigIgNnAxImMX1hJlJ7kXsOwZBjkdzpDLjj1JekKl+kO7IWlFvymZnlEM0rD+sRoKmQhCAQhCATItYNsfFLTItYNsfFBnXc7P2iXzEkJ9dzs/aJfMSQgEIQgFYei272+DKrkHEQIhg9ooDSUp1sgRg2JyGIhtOrkvHUhdCzAhhfCRwGOL5vHfhckEJ0jXie1Zngjf82hLD2syhiEIBCF07KsCqtbmISMPT1RQcxCkT2ANi1QRWixhCXz41Z53Ls2rpckMYiBDmCUSzHtO/SgrixrhVtqix4DDG44sRkti71n0tlVZw2nDx35oiIsi6djXrO6ch0tQW+Ig5ogLNlXDvde57w4M0ARgJcQ340qCxL4XfoqqBncoqUwH4g2ygKhlkaRJrIiKEwapIOCE3NQmWc5sucyPAcGzERZRS0HUty3Zrck3SbKx5cGYRy5RXLQhAIQhAKzNF95ccaOYv20zv5FWabS1J0sgSA+BxmJA/wBpkEl0g3f+BqlzjbCCbMQfYLpFRVXTbcQ3wsrdAZnkaPdI/aDyh/wqVZB6hCEAmRawbY+KWmRawbY+KDOu52ftEvmJIT67nZ+0S+YkhAIQhBNNFtnNV1jyE2IwARNtvwI0pWrvysaFn4lMAs/tC4VKdElLuNJLM/0k/wDCDKrLVqnrp55XfF5JjL8XxQaqEIQej0KX3PvcdgHkN3OlLXD50X2gUPUmunYTWzUgDs7xtxpthkEgvlfmjtWN4o4Hn+oy4m5koK1q1Ax7i0xtDmxyMRZVZV7rtWZYdMRjBhIT5YWcyS7j3Mp62neWqizOZfEtmIcsbIKtQp9PYFNaNptT00bBBHz2BEpFeqwLMsSmORqQM78WPEpNZBT6FbVzblU09MMlVCxnIWIM5EOUFxjsWltK1Ap6eJggj57AiLNggr7FCt++Fi2bYtMZtSg0h8WHW1l5dK5NKdMElVCxyycbhIhyigqFCk16gpRqTCljEIo+LwERZiZRouV0HiEIQWbohtTHfFIT8mU4lDb42d8F1tRHhlBzzBsFwp1wat6S0ab/ADDyHsk2Ckel6kyS08vpAQ/gqK7QhCgEyLWDbHxS0yLWDbHxQZ13Oz9ol8xJCfXc7P2iXzEkIBCEILlut+Y2Gxt/hKk1TI9Cuag/9fHL/wDNNUyyD1CEIM4gzkDP0mLK6rIuW1mZngrJQzjx8BjVKw64e0DxX0pFqjsCgi1qXM+Fsm71k5sOpxY1sQ3XOEAAa+pYBHBmYolI0KiJ0dygoiM4qyoAz1y4hESzr7mtaWTd6uplYSxBn3NSlCDhfAB5WFq6pYWHBmYov6LQpLjx0LkUVXUxmWuQnGJEpYhERisuZHaOTd6qpmcdTNJH/wBVuf8AjvFytWVbNlwwaWL/AKLtoQQt9G1G+PxlT3oKn6sNykMWd8BkNm+519KP0r5vtHnpvbH4pVayEIUGzZc2956eTpCeJ/wLFWlpfiz00B9DVPiyqeDHOGHLugeKt/Sv8nx4/wCLiVFOoQhQCZFrBtj4paZFrBtj4oM67nZ+0S+YkhPrudn7RL5iSEAhCEFy3S/PrEYPqp6mNUyPQrc0R1TS000L/RzY/ukyrG2KR6CpqYsMHjqZBVGkhCFBnDrh7QPFfSkWqOwK+ao+Ah2xX0nTFmjB35XjDwVDEIQiBCEIBCEIBCEIB+lfN9pNhPO3+efivpB+lfOFq8/Ue3l8UqtVCEKDasqHfNRTh6c8bfxK0NL8uSnpw6Hn8GUJ0e0j1do0/Q0ZFIf3Mu9pdrM88ETPqRkT7TqivUIQoBMi1g2x8UtMi1g2x8UGddzs/aJfMSQn13Oz9ol8xJCAQhCCZaMLSahrGAnwCcCH95uFO0q2ZvWrGdm4lQHD7QVC6ecqUwkB8DjISB/tMrmtiEL6WYMkbfGZM4N6Mzcof8IKVQvSbJizs7OxEzt6JMvEGcesG2K+kKXm4/Zx+C+bQfBx2xX0lRvjHF7EPBUOQhCIEIQgEIQgEIQgH6V84Wrz9R7eXxX0evnK2GyVFQ31Ty+KVWmhCfQ0h18scIC7ySGIgygsrRHZeQJqom1+IGwygt7LR+FayokZ8wPJlDYHgZWheWpC6Vl7lGWEhR7nDtPrn/fSqYZAIQhAJkWsG2PilpkWsG2Pigzrudn7RL5iSE+u52ftEvmJIQCEIQCnejC8O8ZHppHwilLGJ/RkUEXrPhg7O7OxYs7IJ3pKuzvKV6uNsYpOebq5FA1cdy7wR3mpipalmOVgymxfrEfpKvb3XYku9K7YOdMRYwH/ACkgjzdHrFfSVBzUXsQ8F82qaUekispowDLGeQBZicUFyoVO/lNrvRi9xH5Ta70YvcVFxIVNvpLruhou6Xn5Sq/6ou6QXKhU1+Uqv+qLulj+Uq0P8rukFzoVMflLtD64u5R+Uq0Pri7tBc6+c7a/SajtEvipHJpHtAxds0beqNRGQ3lIiJ8SIid3UGKtTRndvegPWTjgZj8Rj9HH6Sj9wrnla0gzzNhSjws3+IJdvSPeloxejp3/AGVJD5P6oInfi33t6pJxf4mPMMP/AGUcQhAIQhAJkWsG2PilpkWsG2Pigzrudn7RL5iSE+u52ftEvmJIQCEIQCEIQOo6qShkCSMnCQCxAmVw3dvDTXwhenqBFpmHAwf6T7Uf98CphZwTFTkJg7gYliBMWUhJBKL2XLmsQiONnlpeg21o9tRRWbdbSIxsMNf9lmly/wC439F0bcuDS2yO7UcgxGXCzjxopf7/AGIKhQuxa92ayx3+OhLJ6Y8cFx0AhCEAhCEAhDcODNyqQ2NcyttbLljeKPpM+KKCPNw4Mp9c24J1jhNWM4RNwhH86XbUosy6tBdQN2qDEzHlkPygyi169IUldmjpMYouRz1TkQdy+l847KDelG7bow5TMdWFVORvI7kTu5OWLu/ziXnLi7oQCEIQCEIQCZFrBtj4paZFrBtj4oM67nZ+0S+YkhPrudn7RL5iSEAhCEAhCEAhCEAupYt4Kqxn+IkcR6QfjAS5aEFqWVpPikbLVwuD8bEw44/1XU3nYl5eEXhI39Et7yKl15ggtup0X003DFPKHumK556KC6Kz8YVAaW1ail5ueUNkyFbrXqr2/XJffVEzj0UP86s/CFdGm0ZUdPi8skh+shAVXR3orz4HrJffWhUV81Xzk0h7RkSC3t82HdnkeBpG6BHfEi4lsaUcWcaSHD6jNVkzYL1Qblp2pNah555CkfoxLijsstNCEAhCEAhCEAhCEAmRawbY+KWmRawbY+KDOu52ftEvmJIT67nZ+0S+YkhAKb6Ors014N3aoYn3PJhlMhUIVn6Gf1z1RqzlS+EPZt2zN42qDA+MOJFUCwl6zZcu81wzsuLfFPK1TTZBf7W0ztwYKI1/Oy+2k8Vadx8wWLU7rzWFRkx9FY3jLXLhG9Hl2qe8G774Yn3PK4ZTIVEKyNoZJAbkGQxbZZ1Y+hrlrNmNQyvsCsOQ3ajqXZ5DdnallWr2J88rYuNZEVt1YwzM7xvGb8UiHkWreegjs6slhjZ2jAxYGcsyk2jayamjrROWmmiB4T4x08kTLiX6+VKr2wK3sJyuvfu7FNYcFPJCJMch4HiZF81cS5djBblWER4vHlIjwLKWVlNtLH6JRe0/kXO0P0zPNPK/IEfik7cpeRC7es/4MqZoeUQkJm2V17h3eC35yCRn3MY8TwLKuvpXomCeOoHUmj5ftMpBoopBoaQ6g3yvPNgKk5tb1VVo0285pY3+jkIVrKT6RKTeloT4NgxkJsowsy5jV6ziDdSEW5SIWb73Upv1dkLAKneNnySR8OJZvjGXLupS76rKcOjdhf8ADhVr6RqIbUoZsmDyUxCa1dfOWZu4UtQ0xVcgRi2JSSCLfe6kN+7vx2BOARM7AUIlwlm4ybo0oN+14E7cSESN1J9L0I1EVLUA+LNKQYpdSE3aruxLJltqYIYmxIuF3fVAW5SJTye6ti2CwhXVRHOXQxSD/DGtvRnCFmUFVWvwk+d/3AVXVdSdZIckjuRyGRG/pE6XVwTcysSouJR2xEUtl1LGTDqEfmx4wP62VdVEB0pmEguBiRMYvrCTLuXFtIrNrqfK7sByjHI3pCS7mlqgGnqo5BZmaWPE9plLqwm9PLy3WpbOsyCrjE2lMYc7uZEPC2Kgite+/wAiUX+l8qqhW9sJyBMi1g2x8UtMi1g2x8UGddzs/aJfMSQn13Oz9ol8xJCAVn6GOWr9USrBWhoa5az1RqzlT68eHbl34jJ3pCeQJCxd4fnM+0uHem/BWzE1PDHvenyixYqJ1vOy+2k8UhZm41dVZ2hrWrNmNcup0kWhCcgNuWAyE3Nrp6HOWs2YlXdo89N7c/FX67E+eVZ1x761dt1YwzbnkcSfijlJQq/XynVe2BdDRT8pB7CZc+/XynVe2BX2HlTPSx+iUXtP5Em42Fm2RW1PSZH+AsnaWP0Si9p/Il21hZV3qePkKYYv4nzLN1lZ4RTRleaw2DXqKWTBlsXurvgCGyqUHwcDiI1zNElp72qDhJ+JKGLbbLh39tL4SrZSx4oFlD7lrOLE7Eg0tw5paWdm4DgVeKz73h8J2JR1HKUe5OqwWcYti9kqaaKaZp69j6IoDf8AFSW71ttU2pX05vmiqCJg2h4Fp6Johpoq6pf5uUcfU2Kgtm2m9LWBUY4u0+Z9l34Vrtkv4zuS1YdiUX/iVJaMxtlN5jCPwAlqfLF3H6Tpjx900/SzawyR00APwSfGFspei19/0lfSk+LP5THBZ3ZWtSxu3L/PrCqYh4TyVYqpFNNHl4hsCY4Z3ywScBu/0cjLs3i0byV0jzUJxvFJxshmQiOw7M6t3cxJqYqDXZheaspBHg/O4fdZ8XUy0yys81KHS0Ei6t3rsQ3LYqytmB5WEmBm1R2frf7lXV57ZK3qk5nbBn4oD6MbJeyRZ7Vg34+Q6P8A0vldVQrXvx8h0f8ApfK6qhPak5AmRawbY+KWmRawbY+KDOu52ftEvmJIWzXRlus/A/PzfNL0iSdyL0S90kGC2aSvmoc24zSw48uSSSPN7q13bDgdnZ14g9d8+Lu7u7li7rxCEGxSV81DjuM0sOPLklkize6kGTm7kTu7uWLu+sRLxCBtNVSUhZ45DiPkzgZRH+Iryec6gnOQyM3LFzIyMy2ndLQg2am0J6wRGWaWYB4QE5jkEdlndFRXzVQiEk0pxjqAUkhgGyzvgy1kIM4ZSgJiB3A25CEspCsXfPi7u7u5Yu7rxCDY3/Nk3Ldpdx9DdZNy93kWuhCDYgr5qUCjjmlCItcBlkEDx9Jm4HWuhCBs051GXOZHlARDMRHlFvmjisqWumoc24zSQu/AbhKcRF7qQhB6ZObuRO7u5Yu7lxiJ1s0lpVFELjDPNALli7BNJEJF+661UIG1FSdWeeSQ5Ty4ZzMjPL63SkIQbMtpT1ANGc0pxNyAU0hRDh6LO+DLWQsmBz5Bd/UKDFMi1g2x8V5uZeiXuksooyzBxS1x+aX1oP/Z" alt="" className="logo-movies" />
                </div>
                <div className="search-movies">
                    <input type="text" className="input-movies" placeholder="search"/>
                    <button className="button-search-movies">
                        <img src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/285359683_2166294930193164_8457047306022455141_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=j7dTcyOgQRUAX_G-mDa&_nc_ht=scontent.fhan3-4.fna&oh=03_AVKk562ubHnPhQHB5LcOTVEegX63w7ImqePcZRPY-rFiOg&oe=62E1E1B5" alt="" className="icon-search-movies" />
                    </button>
                </div>
            </div >
            <div className="container-mv">
                {movie.map(e=>(
                    <div className="movie" >
                        <img src={e.poster} alt="" className="poster-mv" />
                        <div className="box-title-mv">
                            <p className="title-mv">{e.title}</p>
                            <p className="imdb-mv">{e.imdb}</p>
                        </div>
                        <div className="description-mv">
                            <div className="content-description-mv">
                                <p className="overview-mv">Overview</p>
                                <p className="text-description">{e.description}</p>
                            </div>
                        </div>
                        
                    </div>                          
                ))}
                {movie.map(e=>(
                    <div className="movie">
                        <img src={e.poster} alt="" className="poster-mv" />
                        <div className="box-title-mv">
                            <p className="title-mv">{e.title}</p>
                            <p className="imdb-mv">{e.imdb}</p>
                        </div>
                        <div className="description-mv">
                            <div className="content-description-mv">
                                <p className="overview-mv">Overview</p>
                                <p className="text-description">{e.description}</p>
                            </div>
                        </div>
                        
                    </div>                          
                ))}
                 {movie.map(e=>(
                    <div className="movie">
                        <img src={e.poster} alt="" className="poster-mv" />
                        <div className="box-title-mv">
                            <p className="title-mv">{e.title}</p>
                            <p className="imdb-mv">{e.imdb}</p>
                        </div>
                        <div className="description-mv">
                            <div className="content-description-mv">
                                <p className="overview-mv">Overview</p>
                                <p className="text-description">{e.description}</p>
                            </div>
                        </div>
                        
                    </div>                          
                ))}
               {movie.map(e=>(
                    <div className="movie">
                        <img src={e.poster} alt="" className="poster-mv" />
                        <div className="box-title-mv">
                            <p className="title-mv">{e.title}</p>
                            <p className="imdb-mv">{e.imdb}</p>
                        </div>
                        <div className="description-mv">
                            <div className="content-description-mv">
                                <p className="overview-mv">Overview</p>
                                <p className="text-description">{e.description}</p>
                            </div>
                        </div>
                        
                    </div>                          
                ))}
            </div>
        </div>
    )
}
export default Movies;