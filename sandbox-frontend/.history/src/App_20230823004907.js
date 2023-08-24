import './App.css';
import React, {useState,useEffect} from 'react';
import { fetchRandomCat } from './api';

function App() {
  const [catUrl, setCatUrl] = useState('');

  useEffect(() => {
    async function getRandomCat(){
      const url = await fetchRandomCat();
      setCatUrl(url);
    }
    getRandomCat();
  }, []);

  const imgStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "90%",
    objectFit: "contain"
  }

  return(
    <div className="App">
      <button>meow :3</button>
      {catUrl && <img style={imgStyle} src={catUrl} alt="Random Cat"></img>}
    </div>
  );

}

export default App;
