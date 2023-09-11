import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router";

const SearchOnLive = (props) => {

    const {
        thumbnail_url,
        title,
        viewer_count,
        game_name,
        user_name,
        user_login
    } = props

    const ThumbSrc = thumbnail_url.replace('{width}', '316').replace('{height}', '178')

    const history = useNavigate();

    const navigate = (url) => {
        history(url)
    }

    return (
        <Container onClick={() => navigate(`/live/${user_login}`)}>
            <Thumb>
                <img src={ThumbSrc} alt=""/>
                <h3>생방송</h3>
            </Thumb>
                <Info>
                    <h3>{title}</h3>
                    <p>{game_name}</p>
                    <p>시청자 {viewer_count}명</p>
                    <p>{user_name}</p>
                </Info>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 30px;
`;

const Thumb = styled.div`
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

`;


const Info = styled.div`
  padding-left: 10px;
  
  h3{
    font-size: 17px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #222;
    line-height: 1.5;
  }
`;



export default SearchOnLive;