import React from 'react'

export default function StreamThumbnail(props) {
    
    return (
        <div className="streamThumbnail" key={props.key}>
            <video 
                className="participantVideoPlayer"
                autoPlay 
                controls 
                playsInline
                source={props.source}
                ref={props.videoRef}
            />
        </div>
    );
}