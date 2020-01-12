import React from 'react';
import './App.css';
import Increment from './Components/Increment'
import User from './Components/User'

function App() {
  return (
    <div className="App">
      <h1>RxJS Example</h1>
      <Increment/>
      <User/>
    </div>
  );
}
export default App;