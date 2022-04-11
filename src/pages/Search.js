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
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://uncovered-treasure-v1.p.rapidapi.com/search/sheep${e.target.value}`,{
            headers: {
                'X-RapidAPI-Host': 'uncovered-treasure-v1.p.rapidapi.com',
                'X-RapidAPI-Key': 'f7d1b6d8aamsh2d278a09daadf8ep11fac8jsn76bc896410dd'
              }
        })
      .then((response) => {
        console.log(response.data.results);
        setTreasures(response.data.results);
      })
      .catch((error) => console.log(error));
  };

  return (
      <>
      <CssBaseline/>
        <div >
        <form   >
        <label className='prayer__label' htmlFor="component-filled">Search</label>
        <input className="prayer__input"  defaultValue='faith' />
      
      <button onClick={handleSubmit}>search</button>
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
      </main> */}
      
    </>
  );
}

export default App;