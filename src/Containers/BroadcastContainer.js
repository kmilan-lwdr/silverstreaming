import React, { useState, useEffect, useRef } from 'react'
import ChatContainer from './ChatContainer';
import ParticipantsContainer from './ParticipantsContainer';
import socketIOClient from "socket.io-client";
const peerConnections = {};
const config = {
  iceServers: [
    { 
      "urls": "stun:stun.l.google.com:19302",
    },
    // { 
    //   "urls": "turn:TURN_IP?transport=tcp",
    //   "username": "TURN_USERNAME",
    //   "credential": "TURN_CREDENTIALS"
    // }
  ]
};

export default function BroadcastContainer(props) {

    const audioSelect = useRef();
    const videoSelect = useRef();
    const videoElement = useRef();
    const socket = socketIOClient(window.location.origin);

    /*useEffect(() => {
        getStream()
            .then(getDevices)
            .then(gotDevices);
    }, [])

    useEffect(() => {
        
        

            socket.on("answer", (id, description) => {
                peerConnections[id].setRemoteDescription(description);
            });
            
            socket.on("watcher", id => {
                const peerConnection = new RTCPeerConnection(config);
                peerConnections[id] = peerConnection;
            
                let stream = videoElement.current.srcObject;
                stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));
            
                peerConnection.onicecandidate = event => {
                if (event.candidate) {
                    socket.emit("candidate", id, event.candidate);
                }
                };
            
                peerConnection
                .createOffer()
                .then(sdp => peerConnection.setLocalDescription(sdp))
                .then(() => {
                    socket.emit("offer", id, peerConnection.localDescription);
                });
            });
            
            socket.on("candidate", (id, candidate) => {
                peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
            });
            
            socket.on("disconnectPeer", id => {
                peerConnections[id].close();
                delete peerConnections[id];
            });

            return () => socket.disconnect();

    }, []);

    function getDevices() {
        return navigator.mediaDevices.enumerateDevices();
      }
      
      function gotDevices(deviceInfos) {
        window.deviceInfos = deviceInfos;
        for (const deviceInfo of deviceInfos) {
          const option = document.createElement("option");
          option.value = deviceInfo.deviceId;
          if (deviceInfo.kind === "audioinput") {
            option.text = deviceInfo.label || `Microphone ${audioSelect.current.length + 1}`;
            audioSelect.current.appendChild(option);
          } else if (deviceInfo.kind === "videoinput") {
            option.text = deviceInfo.label || `Camera ${videoSelect.current.length + 1}`;
            videoSelect.current.appendChild(option);
          }
        }
      }
      
      function getStream() {
        if (window.stream) {
          window.stream.getTracks().forEach(track => {
            track.stop();
          });
        }
        const audioSource = audioSelect.current.value;
        const videoSource = videoSelect.current.value;
        const constraints = {
          audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
          video: { deviceId: videoSource ? { exact: videoSource } : undefined }
        };
        return navigator.mediaDevices
          .getUserMedia(constraints)
          .then(gotStream)
          .catch(handleError);
      }
      
      function gotStream(stream) {
        window.stream = stream;
        audioSelect.current.selectedIndex = [...audioSelect.current.options].findIndex(
          option => option.text === stream.getAudioTracks()[0].label
        );
        videoSelect.current.selectedIndex = [...videoSelect.current.options].findIndex(
          option => option.text === stream.getVideoTracks()[0].label
        );
        videoElement.current.srcObject = stream;
        socket.emit("broadcaster");
      }
      
      function handleError(error) {
        console.error("Error: ", error);
      }*/

    return (
        <div className="container">
            <video 
                className="mainVideoPlayer"
                autoPlay 
                controls 
                playsInline
            />  
            <ParticipantsContainer participants={["1", "2", "3", "4", "5", "6", "7", "8", "9" ]}/>
            <ChatContainer/>          
        </div>
    );
}






