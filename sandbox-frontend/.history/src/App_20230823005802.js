import './App.css';
import React, {useState,useEffect} from 'react';
import { fetchRandomCat } from './api';

function App() {
  const [catUrl, setCatUrl] = useState('');

  async function getNewCat(){
    const url = await fetchRandomCat();
    setCatUrl(url);
  }

  const imgStyle = {
    position: "absolute",
    top: "30px",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "contain"
  }

  return(
    <div className="App">
      <div>
        <button onClick={getNewCat}>meow :3</button>
      </div>
      {catUrl && <img style={imgStyle} src={catUrl} alt="Random Cat"></img>}
    </div>
  );

}

export default App;
