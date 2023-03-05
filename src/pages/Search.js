import React, { useState } from "react";
import axios from "axios";
import {
    CssBaseline  } from "@material-ui/core";
import useStyles from '../styles/styles';
import SearchResults from "../components/searchResults";
import '../styles/pageStyles/savePrayer.scss'
import PostRequest from '../api'

function App() {
  const [treasures, setTreasures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("faith");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://uncovered-treasure-v1.p.rapidapi.com/search/${searchTerm}`,{
            headers: {
                'X-RapidAPI-Host': 'uncovered-treasure-v1.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
              }
        })
      .then((response) => {
        console.log(response.data.results);
        setTreasures(response.data.results);
      })
      .catch((error) => console.log(error));
  };
  const handleInputChange = (e) =>{
    setSearchTerm(e.target.value);
  };

  return (
      <>
      <CssBaseline/>
        <div >
        <form onSubmit={handleSubmit}  >
        <label className='prayer__label' htmlFor="component-filled">Search</label>
        <input className="prayer__input"  defaultValue= {searchTerm} onChange={handleInputChange} />
      
      <button onClick={handleSubmit} >search</button>
      </form>
        </div>
      
      <main>
        {treasures
          .map((treasure) => (
            <SearchResults
              text={treasure.text}
              scriptures={treasure.scriptures}

            />
          ))}
      </main> 
      
    </>
  );
}

export default App;