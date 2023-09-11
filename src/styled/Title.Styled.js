import styled from 'styled-components'

export const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 15px;
  span {
    color: #9047ff;
    cursor: pointer;
    
    &:hover{
      text-decoration: underline;
    }
  }
`;

export const CustomString = styled.h1`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-height: 1.4;
  -webkit-box-orient: vertical;
`;