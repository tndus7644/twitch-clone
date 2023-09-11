import React from 'react';
import styled from 'styled-components';
import {CustomString} from "../../../styled/Title.Styled";

const CategoryContent = ({name, box_art_url}) => {

    const gameThumb = box_art_url?.replace('{width}', '153').replace('{height}', '204')

    return (
        <Container>
            <img src={gameThumb} alt=""/>
            <CategoryInfo>
                <Name>{name}</Name>
            </CategoryInfo>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  max-width: 153px;
  width: 10%;

`;

const Name = styled(CustomString)`
  padding-top: 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #9047ff;
  }
`;

const CategoryInfo = styled.div`
  
`;

export default CategoryContent;