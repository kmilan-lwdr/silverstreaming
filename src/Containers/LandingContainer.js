import React, { useState, useEffect } from 'react';

import { Route, Switch, Redirect, HashRouter, Link } from 'react-router-dom';

export default function LandingContainer() {

    const [tokenId, setTokenId] = useState("");
  
    return (
      <div className="container">
          <div className="landingInputBox">
            <div className="input">
                <label htmlFor="#tokenIdInput">Token</label>
                <input id="tokenIdInput" onChange={event => setTokenId(event.target.value)} placeholder="Input token id"/>
            </div>
            <div className="buttons">
                <Link to={`/watch/${tokenId}`} className="modeButton">
                    <button>Watch</button>
                </Link>
                <Link to={`/broadcast/${tokenId}`} className="modeButton">
                    <button>Broadcast</button>
                </Link>
            </div>
          </div>
          
      
      </div>
    );
  }
  