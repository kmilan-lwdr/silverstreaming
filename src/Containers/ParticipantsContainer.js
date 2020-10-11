import React, {createRef, useRef, useEffect} from 'react'
import StreamThumbnail from '../Components/StreamThumbail';

export default function ParticipantsContainer(props) {


    const participantRefs = useRef([]);

    useEffect(() => {
        console.log(props.participants.length)
        participantRefs.current = participantRefs.current.slice(0, props.participants.length);
        console.log(participantRefs.current)
    }, [props.participants]);

    function toggleMuteAll(newState){
        for(let ref of participantRefs.current){
            ref.muted = newState;
        }
    }
    
    return (
        <div className="container">
            <div className="muteButtons">
                <button onClick={() => toggleMuteAll(true)}>Mute all</button>
                <button onClick={() => toggleMuteAll(false)}>Unmute all</button>
            </div>            
            <div className="thumbnails">
                {
                    props.participants?.map((index, source) => {
                        return  <div className="streamThumbnail" key={index}>
                                    <video 
                                        className="participantVideoPlayer"
                                        autoPlay 
                                        controls 
                                        playsInline
                                        source={source}
                                        ref={el => participantRefs.current[index-1] = el} 
                                        key={index}
                                    />
                                </div>
                    })
                }
            </div>
            
        </div>
    );
}