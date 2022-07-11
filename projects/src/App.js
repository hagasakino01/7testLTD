

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Country from './country/country';
import DadJokes from './dadJokes/dadJokes';
import Github from './gitHup/gitHub';
import Home from './homepage/home';
import Movies from './Movies/Movies';
import Navbar from './navbar/Navbar';
import PokeDex from './pokedex/pokedex';
import Restaurant from './restaurant/restaurant';
import Todo from './todo/todo';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Todo' element={<Todo />}/>
        <Route path='/DadJokes' element={<DadJokes />}/>
        <Route path='/Github' element={<Github />}/>
        <Route path='/Movies' element={<Movies />}/>
        <Route path='/PokeDex' element={<PokeDex />}/>
        <Route path='/Country/*' element={<Country />}/>
        <Route path='/restaurant/*' element={<Restaurant />}/>
      </Routes>
    </div>

  );
}

export default App;
