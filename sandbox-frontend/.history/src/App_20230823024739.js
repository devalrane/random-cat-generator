import './App.css';
import React, {useState} from 'react';
import { fetchRandomCat } from './api';

function App() {
  const [catUrl, setCatUrl] = useState(''); // for fetching and setting img src

  const [urlList, setUrlList] = useState([]); // for storing url for prev and next

  const [currentIndex, setCurrentIndex] = useState(0);

  async function getNewCat(){

    const url = await fetchRandomCat();

    // Create a copy of the existing urlList cos normal var doesnt work and seState has weird behaviour
    const updatedUrlList = [...urlList];

    if (updatedUrlList.length === 0 || currentIndex===updatedUrlList.length-1 ) {
        updatedUrlList.push(url);
        setCurrentIndex(currentIndex+1);
        setUrlList(updatedUrlList); 
        setCatUrl(url);
        console.log(updatedUrlList, currentIndex);
    } else {
        setCurrentIndex(currentIndex+1); 
        setCatUrl(updatedUrlList[currentIndex]);
    }

    setCurrentIndex(currentIndex+1); 
    setUrlList(updatedUrlList); 
    setCatUrl(url);
    console.log(updatedUrlList, currentIndex);
  }

  function getPreviousCat(){
    if(currentIndex<=0){
      //do nothing
    }else{

    }
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
