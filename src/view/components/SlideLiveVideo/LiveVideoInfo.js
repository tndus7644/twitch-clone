import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from "../../../styled/ProfileImage.Styled";

const LiveVideoInfo = (props) => {

    const {viewer_count, user_name, game_name} = props

    return (
        <Container>
            <ProfileImage/>
            <h1>{user_name}</h1>
            <p className={"game_name"}>{game_name}</p>
            <p>시청자 {viewer_count}명</p>
        </Container>
    )
}

const Container = styled.div`
  width: 200px;
  background: #fff;
  padding: 10px;
  font-size: 13px;
  line-height: 1.4;
  
  
  h1{
    font-weight: 600;
    font-size: 14px;
    color: #9047ff;
    cursor: pointer;
  }
  
  p.game_name{
    color: #9047ff;
    cursor: pointer;
  }
`;



export default LiveVideoInfo;