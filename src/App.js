import React from 'react';
import './App.css';
import TestRouter from './components/TestRouter';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <h1>Testing Updated</h1>
    // </div>
    <BrowserRouter>
      <TestRouter />
    </BrowserRouter>
  );
}


export default App;
