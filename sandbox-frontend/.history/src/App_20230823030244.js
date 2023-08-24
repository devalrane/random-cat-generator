import './App.css';
import React, {useState} from 'react';
import { fetchRandomCat } from './api';

function App() {
  const [catUrl, setCatUrl] = useState(''); // for fetching and setting img src

  const [urlList, setUrlList] = useState([]); // for storing url for prev and next

  const [currentIndex, setCurrentIndex] = useState(-1);

  async function getNewCat() {
    const url = await fetchRandomCat();

    const updatedUrlList = [...urlList];

    if (updatedUrlList.length === 0 || currentIndex === updatedUrlList.length - 1) {
        updatedUrlList.push(url);
        setUrlList(updatedUrlList);
        setCatUrl(url);
        setCurrentIndex(currentIndex + 1);
        // console.log(updatedUrlList, currentIndex, updatedUrlList.length);
    } else {
        setCurrentIndex(currentIndex + 1);
        setCatUrl(updatedUrlList[currentIndex + 1]); // Use currentIndex + 1
    }
  }

  function getPreviousCat() {
      if (currentIndex <= 0) {
          // do nothing
      } else {
          const newIndex = currentIndex - 1;
          setCatUrl(urlList[newIndex]);
          setCurrentIndex(newIndex);
      }
  }



  return(
    <div className="App">

      <div className='fullscreen-container'>
        {catUrl && <img className='overlay-image' src={catUrl} alt="Random Cat"></img>}
        <div className='overlay-buttons'>
          <button onClick={getPreviousCat} className='left-button'>Previous</button>
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
