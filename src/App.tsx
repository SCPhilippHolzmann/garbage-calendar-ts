import React from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router,Link,Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>  
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Kalender</Link>
            </li>
          </ul>
        </nav>  
        
      </header>
    </div>
  );
}

export default App;
