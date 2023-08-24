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
    height: "100%",
    objectFit: "contain"
  }

  return(


  

    <div className="App">
      <header className='App-header'>
      <style>
        body, html {{
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }}

        img {{
            
        }}
    </style>
        {catUrl && <img src={catUrl} alt="Random Cat"></img>}
      </header>
    </div>
  );

}

export default App;
