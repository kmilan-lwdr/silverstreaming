import React from 'react'

export default function StreamThumbnail(props) {
    
    return (
        <div className="streamThumbnail">
            <video 
                className="participantVideoPlayer"
                autoPlay 
                controls 
                playsInline
            />
        </div>
    );
}