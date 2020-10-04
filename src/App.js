import React, { useState, useEffect } from 'react';
import './App.css';
import ViewContainer from './Containers/ViewContainer';
import BroadcastContainer from './Containers/BroadcastContainer';

function App() {

  const [viewerMode, setMode] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    setMode(!viewerMode);
  }

  return (
    <div className="App">
      {viewerMode}
      {
        viewerMode  ? (
          <ViewContainer />
        ) : (
          <BroadcastContainer/>
        )
      }
      <button onClick={handleClick}>Clicky</button>
    </div>
  );
}

export default App;
