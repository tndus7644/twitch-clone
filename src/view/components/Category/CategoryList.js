import React from 'react';
import styled from 'styled-components';
import CategoryContent from "./CategoryContent";
import {Title} from "../../../styled/Title.Styled";

const CategoryList = ({categoryList}) => {

    return (
        <Container>
            <CategoryTitle>
                취향 저격 <span>카테고리</span>
            </CategoryTitle>
            <GameCategory>
            {
                categoryList.data.map((item, index) =>
                    <CategoryContent {...item} key={index}/>)
            }
            </GameCategory>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 30px;
`;

const CategoryTitle = styled(Title)`
  
  span {
    color: #9047ff;
    cursor: pointer;
  }

`;

const GameCategory = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CategoryList;