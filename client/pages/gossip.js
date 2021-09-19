import React from 'react';
import Conference from '../components/Conference';
import { VideoContext } from '../components/VideoContext';
import { useRouter } from 'next/router';

function gossip() {
    const router = useRouter();
    const { room, username } = router.query;

    return (
        <VideoContext>
            <Conference room={room} username={username} />
        </VideoContext>
    );
}

export default gossip;
