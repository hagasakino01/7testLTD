import React from "react";
import { Link } from "react-router-dom";
import './home.css'


function Home(){
  return(
      <div className="homepage">
          <h1>Projects</h1>
            <div className="conten-homepage">
            <div className="box-list-project">
                <ul className="list-project">
                    <li className="li-pj"><Link to='/Todo'>Bai 1: Todo</Link></li>
                    <li className="li-pj"><Link to='/DadJokes'>Bai 2: Dad Joker</Link></li>
                    <li className="li-pj"><Link to='/Github'>Bai 3: Githup</Link></li>
                    <li className="li-pj"><Link to='/Movies'>Bai 4: Movies</Link></li>
                    <li className="li-pj"><Link to='/PokeDex'>Bai 5: PokeDex</Link></li>
                    <li className="li-pj"><Link to='/Country'>Bai 6: Country</Link></li>
                    <li className="li-pj"><Link to='/Restaurant'>Bai 7: Restaurant</Link></li>
                </ul>

            </div>
            </div>
      </div>
      

  )  
}
export default Home;