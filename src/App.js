import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Posters from "./components/Posters/Posters";
import {
  originals,
  action,
  trending,
  comedy,
  horror,
  romance,
  documentaries,
} from "./constants/urls.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Posters url={originals} title="Netflix Originals" />
      <Posters url={trending} title="Trending" isSmall />
      <Posters url={action} title="Action" isSmall />
      <Posters url={comedy} title="Comedy" isSmall />
      <Posters url={horror} title="Horror" isSmall />
      <Posters url={romance} title="Romance" isSmall />
      <Posters url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
