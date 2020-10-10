import React, { useState, useEffect } from 'react';

import { Route, Switch, Redirect, HashRouter, Link } from 'react-router-dom';

export default function LandingContainer() {

    const [tokenId, setTokenId] = useState("");
  
        function generateToken(){
            var token = '';
            var chars = "ABCDEFGHJKLMNPQRSTUVXYZabcdefghijklmnopqrstuvwxyz23456789"
            var charlen = chars.length;
            var pointer = 0;
            for (var i = 0; i < 12; i++){
                pointer = Math.floor(Math.random()*charlen);
                token += chars.charAt(pointer);
            }
            var inputfield = document.getElementById("tokenIdInput")
            inputfield.value = token;
        }

    return (
      <div className="container">
          <div className="landingInputBox">
            <div classname="tokenGenerator">
                <button onClick={generateToken}>Generate token</button>
            </div>
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
  