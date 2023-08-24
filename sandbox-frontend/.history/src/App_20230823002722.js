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

  return(
    <div className="App">
      <header className='App-header'>
        {catUrl && <img src={catUrl} alt="Random Cat"></img>}
      </header>
    </div>
  );

}

export default App;
