import React from 'react';
import styled from 'styled-components';
import LiveVideoInfo from "./LiveVideoInfo";
import {useNavigate} from "react-router";

const LiveVideoContent = (props) => {

    const {
        thumbnail_url,
        viewer_count,
        user_name,
        game_name,
        user_login
    } = props

    const history = useNavigate();

    const navigate = (url) => {
        history(url)
    }

    const VideoThumbSrc = thumbnail_url.replace('{width}', '530').replace('{height}', '300')

    return (
        <Container onClick={() => navigate(`/live/${user_login}`)}>
            <Video>
                <h3>생방송</h3>
                <img src={VideoThumbSrc} alt=""/>
            </Video>
            <LiveVideoInfo viewer_count={viewer_count} user_name={user_name} game_name={game_name}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const Video = styled.div`
  position: relative;
  
  h3{
    position: absolute;
    top: 10px;
    left: 10px;
    color: #fff;
    font-size: 14px;
    background: #e91a17;
    padding: 4px;
    border-radius: 3px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default LiveVideoContent;