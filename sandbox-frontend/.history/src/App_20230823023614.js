import './App.css';
import React, {useState} from 'react';
import { fetchRandomCat } from './api';

function App() {
  const [catUrl, setCatUrl] = useState(''); // for fetching and setting img src

  const [urlList, setUrlList] = useState([]); // for storing url for prev and next

  const [currentIndex, setCurrentIndex] = useState(0);
  const c = 0;
  const updatedUrlList = [...urlList];

  async function getNewCat(){

    const url = await fetchRandomCat();
    if(updatedUrlList.length===0){
      updatedUrlList = [url];
      c+=1;
    } else{
      updatedUrlList.push(url);
      c+=1
      //setUrlList([...urlList, url]);
    }
    
    setCurrentIndex(urlList.length);
    
    setCatUrl(url);
    console.log(updatedUrlList, c);
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
