import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [nasaImg, setImg] = useState(0);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=pr8QVBO5MwklPsjdyrU2ztTEjxLodsU0Zm99fjXW')
        console.log(nasaData);
        setImg(nasaData.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])
  console.log(nasaImg);
  return (
    <div className="App">
      <h2>{nasaImg.title}</h2>
      <h3>{nasaImg.date}</h3>
        <div className="content">
          <img src={`${nasaImg.url}`}  alt="nasa-img"/>
          <div className="description">
          {nasaImg.explanation} 
          <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html"> Learn More</a>
          </div>
        </div>
      </div>
  );
}

export default App;
