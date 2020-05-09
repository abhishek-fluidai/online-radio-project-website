import React, { useContext } from "react";
import "./Container.css";
import { PlayerContext } from "../Contaxt";
import stations from "../pages/Stations/Stations";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
const Container = () => {
  const [player, setPlayer] = useContext(PlayerContext);

  //   useEffect(() => {
  //     if (didMountRef.current) {
  //       axios
  //         .get(BASE_URL + "/stations/search?name=" + term + "&&limit=10")
  //         .then((info) => {
  //           tuneStations(info.data);
  //           console.log(info.data);
  //         })
  //         .catch((error) => console.error(error));
  //       console.log("searching...");
  //     } else didMountRef.current = true;
  //   }, [term]);

  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stations" component={stations} />
        </Switch>
        {player}
      </Header>
    </Router>
  );
};

export default Container;
