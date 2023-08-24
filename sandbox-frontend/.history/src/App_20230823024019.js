import './App.css';
import React, {useState} from 'react';
import { fetchRandomCat } from './api';

function App() {
  const [catUrl, setCatUrl] = useState(''); // for fetching and setting img src

  const [urlList, setUrlList] = useState([]); // for storing url for prev and next

  const [currentIndex, setCurrentIndex] = useState(1);

  async function getNewCat(){

    const url = await fetchRandomCat();

    // Create a copy of the existing urlList
    const updatedUrlList = [...urlList];

    if (updatedUrlList.length === 0) {
        updatedUrlList.push(url);
    } else {
        updatedUrlList.push(url);
    }

    setCurrentIndex(currentIndex+1); // Update currentIndex
    setUrlList(updatedUrlList); // Update the urlList
    setCatUrl(url);
    console.log(updatedUrlList, currentIndex);
  }

  function getPreviousCat(){

  }

  return(
    <div className="App">

      <div className='fullscreen-container'>
        {catUrl && <img className='overlay-image' src={catUrl} alt="Random Cat"></img>}
        <div className='overlay-buttons'>
          <button className='left-button'>Previous</button>
          <button onClick={getNewCat} className='right-button'>Next</button>
        </div>
      
      </div>



      {/* <div>
        <button onClick={getNewCat}>meow :3</button>
      </div>
      {catUrl && <img style={imgStyle} src={catUrl} alt="Random Cat"></img>} */}
    </div>
  );

}

export default App;
