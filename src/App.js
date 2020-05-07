import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import Player from './components/Player/Player'
import Header from './components/Header/Header'
import Station from './components/Station/Station'


function App() {
  const [stations, tuneStations] = useState([]);
  const [playerInfo, setPlayerInfo] = useState('');
  const [term, setTerm] = useState('');
    const didMountRef = useRef(false);
    const BASE_URL = "https://de1.api.radio-browser.info/json";

  useEffect(() => {
   
    axios.get(BASE_URL+'/stations/topvote/20')
      .then(info => {
        tuneStations(info.data);
//         console.log(info.data)
      })
      .catch(error => console.error(error))
  }, [])
   
    useEffect(() => {
    if (didMountRef.current) {

    axios.get(BASE_URL+'/stations/search?name='+term+"&&limit=10")
      .then(info => {
        tuneStations(info.data);
        console.log(info.data)
      })
      .catch(error => console.error(error))
      console.log("searching...")
    } else didMountRef.current = true
       
  }, [term])
    
    const delPlayer = () => {
        setPlayerInfo('')
    }
    
    
    const playStn = (info) => {
        const play1 = <Player name={info.name} 
        url={info.url} 
        favicon={info.icon} 
        del={delPlayer}  
        />
        setPlayerInfo(play1) 
    }
    const searchStations= (e) => {
        if (e !== "" || e !== null) {
            setTerm(e)
        }
    }
   const stationsList =
     stations.map(stn => (
       <Station key={stn.stationuuid} favicon={stn.favicon}
         name={stn.name}
         country={stn.country}
         language={stn.votes} 
         clickHandler={() => playStn({"name":stn.name,
                  "icon": stn.favicon,
                  "url":stn.url})}/>
     ));

  return (
    <div className="App">
      <Header searcHandler={searchStations}>
      <div className="stations">
         {stationsList}
      </div>
      </Header>
       
        {playerInfo}
    </div>
  );
}

export default App;
