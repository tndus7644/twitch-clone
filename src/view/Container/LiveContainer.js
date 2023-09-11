import React from 'react';
import styled from 'styled-components';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import {useParams} from "react-router";

const LiveContainer = () => {

    const channelId = useParams();

    return (
        <Container>
            <Video>
                <ReactTwitchEmbedVideo channel={channelId}
                                       className={"StreamVideo"}
                                       width={"1680px"}
                                       height={"800px"}/>
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