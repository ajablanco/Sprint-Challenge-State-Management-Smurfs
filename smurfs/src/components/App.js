import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from './SmurfContext';
import axios from 'axios';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const App = () => {
  const [smurfs, setSmurfs] = useState([])
  const addSmurf = newSmurf => {
    setSmurfs([...smurfs, newSmurf]);
  }

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      setSmurfs(res.data)
    })
  }, [])



  return (
    <SmurfContext.Provider value={{addSmurf, smurfs}}>
      <div className="listForm">
        <h1>Smurfs</h1>
        <SmurfList/>
        <SmurfForm />
      </div>
    </SmurfContext.Provider>
  )
}


export default App;
