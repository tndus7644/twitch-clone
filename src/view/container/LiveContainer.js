import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router";

const LiveContainer = () => {

    const channelId = useParams();
    // match.params.id 사용못함

    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(`https://player.twitch.tv/?channel=${channelId}&parent=spyaudio.net&muted=true`);
    },[channelId])


    return (
        <Container>
            <Video>
                <iframe
                    title={"twitchURL"}
                    src={url}
                    height="800"
                    width="1680"/>
            </Video>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 55px;
`;

const Video = styled.div`
  max-width: 100%;
  max-height: 100%;
`;


export default LiveContainer;