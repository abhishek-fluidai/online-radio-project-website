import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL, PlayerContext } from "../../Contaxt";
import Station from "../../components/Station/Station";
import Player from "../../components/Player/Player";

const Home = () => {
  const [stations, tuneStations] = useState([]);
  const [_, setPlayer] = useContext(PlayerContext);

  useEffect(() => {
    axios
      .get(BASE_URL._currentValue + "/stations/topvote/12")
      .then((info) => {
        tuneStations(info.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const delPlayer = () => {
    setPlayer("");
  };

  const playStn = (info) => {
    const play = (
      <Player
        name={info.name}
        url={info.url}
        favicon={info.icon}
        del={delPlayer}
      />
    );
    setPlayer(play);
  };
  const stationsList = stations.map((stn) => (
    <Station
      key={stn.stationuuid}
      favicon={stn.favicon}
      name={stn.name}
      country={stn.country}
      language={stn.votes}
      clickHandler={() =>
        playStn({ name: stn.name, icon: stn.favicon, url: stn.url })
      }
    />
  ));

  return <div className="stations">{stationsList}</div>;
};
export default Home;
