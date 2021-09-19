import React, { useContext, useEffect } from 'react';
import { SocketContext } from './VideoContext';

function Conference({ room, username }) {
    const {
        name,
        callAccepted,
        myVideo,
        userVideo,
        callEnded,
        stream,
        call,
        callUser,
        setName,
        setRoom
    } = useContext(SocketContext);
    console.log(room, username);

    useEffect(() => {
        setName(username);
        setRoom(room);
        callUser(room);
    }, []);

    return (
        <div>
            {stream && (
                <>
                    <div className="name">{name}</div>
                    <video playsInline muted ref={myVideo} autoPlay />
                </>
            )}
            {callAccepted && !callEnded && (
                <>
                    <div className="caller-name">{call.name}</div>
                    <video playsInline ref={userVideo} autoPlay />
                </>
            )}

            {call.isReceivingCall && !callAccepted && (
                <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                    <h1>{call.name} is calling:</h1>
                    <button onClick={answerCall}>Answer</button>
                </div>
            )}
        </div>
    );
}

export default Conference;
