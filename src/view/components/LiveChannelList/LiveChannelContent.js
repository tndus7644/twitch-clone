import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router";
import {CustomString} from "../../../styled/Title.Styled";

const LiveChannelContent = (props) => {

    const {
        thumbnail_url,
        title,
        viewer_count,
        game_name,
        user_name,
        user_login
    } = props

    const VideoThumbSrc = thumbnail_url.replace('{width}', '316').replace('{height}', '178')
    const usersImage = thumbnail_url.replace('{width}x{height}', '70x70')

    const history = useNavigate();

    const navigate = (url) => {
        history(url)
    }

    return (
        <Container onClick={() => navigate(`/live/${user_login}`)}>
            <Video>
                <img src={VideoThumbSrc} alt=""/>
                <h3>생방송</h3>
                <p>시청자 {viewer_count}명</p>
            </Video>
            <VideoInfo>
                <ProfileImage src={usersImage} alt="profile image"/>
                <Info>
                    <Title>{title}</Title>
                    <p>{user_name}</p>
                    <p>{game_name}</p>
                </Info>
            </VideoInfo>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  max-width: 316px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Video = styled.div`
  position: relative;

  h3 {
    position: absolute;
    top: 9px;
    left: 9px;
    background: #e91a17;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
    font-size: 13px;
  }

  p {
    position: absolute;
    bottom: 9px;
    left: 9px;
    padding: 3px 4px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    border-radius: 2px;
    font-size: 13px;
  }

  img.slide {
    width: 530px;
    height: 330px;
  }
`;

const VideoInfo = styled.div`
  padding-top: 15px;
  display: flex;
`;


const Info = styled.div`
  max-width: 250px;
  padding-left: 10px;
  flex: 1;

  p {
    color: #adadb8;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Title = styled(CustomString)`
`;


export default LiveChannelContent;