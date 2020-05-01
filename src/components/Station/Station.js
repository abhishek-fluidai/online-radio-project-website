import React from 'react';
import styles from './Station.module.css';
import icon from '../../assets/Icons/wave-1.png'

const Station = (props) => {
    
    return(
    <div className={styles["stn"]} onClick={props.clickHandler}>
            <div className={styles["stn-img"]}>
                <img src={props.favicon} alt="station-img"
        onError={(e)=>{e.target.src=icon}}/>
            </div>
            <div className={styles["stn-data"]}>
                <span>{props.name}</span>
                <div className={styles["meta-data"]}>
                <span>{props.country+ " • " }</span>
                   
                <span>{props.language+" likes"}</span>
                    </div>
                
            </div>
    </div>
    )
}

export default Station;