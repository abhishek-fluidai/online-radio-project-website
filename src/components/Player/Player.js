import React, { useState } from "react";
import styles from "./Player.module.css";
import icon from "../../assets/Icons/wave.png";
import ReactPlayer from "react-player";

const Player = (props) => {
  const [playing, setPlaying] = useState(false);
  const [playerText, setText] = useState("Loading");
  const [playble, setPlayble] = useState(false);

  const pause = () => {
    setPlaying(false);
  };
  const play = () => {
    setPlaying(true);
  };
  const makePlay = () => {
    setPlaying(true);
    setPlayble(true);
    setText(props.name);
  };
  const makeunplay = () => {
    setPlaying(false);
    setPlayble(false);
    setText("Loading...");
  };
  const delStream = () => {
    setText("Stream offine. visit Help section");
  };

  return (
    <div className={styles["player"]}>
      <ReactPlayer
        id="player"
        url={props.url}
        onCanPlay={makePlay}
        onLoadStart={makeunplay}
        style={{ display: "none" }}
        onError={delStream}
        playing={playing}
      />

      <div className={styles["player-img"]}>
        <img
          src={props.favicon}
          alt="channel-img"
          onError={(e) => {
            e.target.src = icon;
          }}
        />
      </div>

      <div className={styles["player-title"]}>
        {playble ? props.name : playerText}
      </div>

      <div id={styles["player-controls"]}>
        <button
          id={styles["play-icon"]}
          className={styles["play-controls"]}
          style={{
            display: playing ? "none" : "inline",
            opacity: playble ? "1" : "0",
            pointerEvents: playble ? "all" : "none",
          }}
          onClick={play}
        ></button>
        <button
          id={styles["pause-icon"]}
          style={{ display: playing ? "inline" : "none" }}
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
  );
};

export default Player;
