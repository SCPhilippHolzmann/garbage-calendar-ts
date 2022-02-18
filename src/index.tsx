import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GarbageStreet } from './Page/garbage-street';
import { CalendarPage } from './Page/CalendarPage';
import { Link } from 'react-router-dom';

ReactDOM.render(
  
  <BrowserRouter>
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
  <Routes>
  <Route path="/" element={<GarbageStreet />}>
  </Route>
  <Route path="/calendar">
      <Route path=":streetid" element={<CalendarPage />} />
    </Route>
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
