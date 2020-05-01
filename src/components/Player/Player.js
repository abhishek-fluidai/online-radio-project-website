import React, {useState} from 'react';
import styles from './Player.module.css'
//import playicon from '../../assets/Icons/play-green.svg'
//import pauseicon from '../../assets/Icons/pause-g.svg'
import icon from '../../assets/Icons/wave-1.png'


const Player = (props) => {
    const [playing , setPlaying] = useState('');
    const [playerText, setText] = useState("Loading")
    const [playble, setPlayble] = useState(false);
    const Player = document.getElementById("player");
    
    const pause = () => {
       setPlaying(false)
    }
    const play = () => {
          setPlaying(true)
        
    }
   const makePlay = () => {
       setPlayble(true);
       setPlaying(true)
       Player.play()
   }
   const makeunplay = () => {
       setPlayble(false);
       setPlaying(false);
       setText("Loading...")
   }
   const delStream = () => {
//       alert("station is offline!")
       setText("Stream offline")
      
   }
    if (playing === true ) {
         Player.play()
    }
    else if  (playing === false) {
         Player.pause()
    }
    
   
    return (
        <div className={styles["player"]}>
           <audio id="player" 
             src={props.url} 
             onCanPlay={makePlay} 
             onLoadStart={makeunplay} 
             onError={delStream} autoPlay />
            
            <div className={styles["player-img"]}>
                <img 
                 src={props.favicon}    
                 alt="channel-img" 
                onError={(e)=>{e.target.src=icon}}/>
             </div>
            
             <div className={styles["player-title"]}>
                 {playble ? props.name : playerText}
             </div>
            
            <div id={styles["player-controls"]}>
             <button 
                id={styles["play-icon"]} 
                className={styles["play-controls"]} 
                style={{display: playing ? 'none': 'inline',
                visibility: playble ? "visible" : "hidden"
                }}
                onClick={play} 
                 ></button>
            <button 
                id={styles["pause-icon"]} 
                style={{display: playing ? 'inline': 'none'}}
                className={styles["play-controls"]} 
                onClick={pause} 
                 ></button>
            <button 
                id={styles["stop-icon"]} 
                className={styles["play-controls"]} 
                onClick={props.del} 
                 ></button>


            </div>

        </div>
    )
}

export default Player;