import React, { useState, useEffect, useRef } from 'react';
import RadioBrowser from 'radio-browser';
import './App.css';
import Player from './components/Player/Player'
import Header from './components/Header/Header'
import Station from './components/Station/Station'


function App() {
  const [stations, tuneStations] = useState([]);
  const [playerInfo, setPlayerInfo] = useState('');
  const [term, setTerm] = useState('');
    const didMountRef = useRef(false)

  useEffect(() => {
   
        let filter = {
               by: 'topvote', // stations by topvote
            rowcount: 9    // top 5 stations
        }
    RadioBrowser.getStations(filter)
      .then(info => {
        tuneStations(info);
         console.log(info)
      })
      .catch(error => console.error(error))
  }, [])
    
    
   
    useEffect(() => {
    if (didMountRef.current) {
        let filter = {
            searchterm: term
        }
    RadioBrowser.getStations(filter)
      .then(info => {
        tuneStations(info);
        // console.log(info)
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
//        console.log(e)
    }
   const stationsList =
     stations.map(stn => (
       <Station key={stn.id} favicon={stn.favicon}
         name={stn.name}
         country={stn.country}
         language={stn.votes} 
         clickHandler={() => playStn({"name":stn.name,
                  "icon": stn.favicon,
                  "url":stn.url})}/>
     ));

  return (
    <div className="App">
      
      <Header searcHandler={searchStations}/>
      <div className="stations">
         {stationsList}
      </div>
        {playerInfo}
    </div>
  );
}

export default App;
