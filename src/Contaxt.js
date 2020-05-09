import React, { useState } from "react";
const baseURL = "https://de1.api.radio-browser.info/json";

export const BASE_URL = React.createContext(baseURL);
export const PlayerContext = React.createContext();
export const PlayerProvider = (props) => {
  const [player, setPlayer] = useState();
  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {props.children}
    </PlayerContext.Provider>
  );
};
