import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Home from './Home/Home'
import './App.css';


function App() {
  useEffect(() => {
    const post = async () => {
    await axios.get("/api/claim_store").then((e) => console.log(e.data)) 
    
    }
    post();
                
    }, []);

  return (
    <Router>
        <div className="darker">
  
        <Route path="/" exact component={Home} />
    </div>

    </Router>
  );
}

export default App;
