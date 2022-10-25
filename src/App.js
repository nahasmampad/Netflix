import React from "react";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import RowPost from "./Components/RowPost/RowPost";
import {action, orginals, comedy} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost url= {orginals} title='Netflix Orginals'/>
      <RowPost url = {action} title='Action' isSmall/>
      <RowPost url = {comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
