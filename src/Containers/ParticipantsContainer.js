import React from 'react'
import StreamThumbnail from '../Components/StreamThumbail';

export default function ParticipantsContainer(props) {
    
    return (
        <div className="container">
            <div className="thumbnails">
                <StreamThumbnail/>
                <StreamThumbnail/>
                <StreamThumbnail/>
                <StreamThumbnail/>
                <StreamThumbnail/>
                <StreamThumbnail/>
                <StreamThumbnail/>
                <StreamThumbnail/>
                <StreamThumbnail/>
            </div>
            
        </div>
    );
}