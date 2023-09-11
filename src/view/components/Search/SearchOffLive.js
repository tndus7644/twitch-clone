import React from 'react';
import styled from 'styled-components';

const SearchOffLive = (props) => {

    const {
        display_name,
        thumbnail_url
    } = props


    const ThumbSrc = thumbnail_url.replace('{width}', '316').replace('{height}', '178')


    return (
        <Container>
            <Thumb>
                <img src={ThumbSrc} alt=""/>
            </Thumb>
            <Info>
                <h3>{display_name}</h3>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Thumb = styled.div`
  position: relative;  
  cursor: pointer;


  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.1);
  }
`;

const Info = styled.div`
  max-width: 250px;
  padding-left: 10px;

  
  h3{
    padding-left: 20px;
    font-weight: 600;
    font-size: 17px;
  }
`;



export default SearchOffLive;