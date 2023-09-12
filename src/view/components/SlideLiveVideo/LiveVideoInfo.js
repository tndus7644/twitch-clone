import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from "../../../styled/ProfileImage.Styled";

const LiveVideoInfo = (props) => {

    const {viewer_count, user_name, game_name, title} = props

    return (
        <Container>
            <ProfileImage/>
            <h1>{user_name}</h1>
            <p className={"info"}>{game_name}</p>
            <p className={"info"}>시청자 {viewer_count}명</p>
            <p className={"info"}>{title}</p>
        </Container>
    )
}

const Container = styled.div`
  width: 200px;
  background: #18181b;
  padding: 10px;
  font-size: 13px;
  line-height: 1.4;
  
  
  h1{
    font-weight: 600;
    font-size: 14px;
    color: #9047ff;
    cursor: pointer;
  }
  
  p.info{
    color: #fff;
    cursor: pointer;
  }
`;



export default LiveVideoInfo;