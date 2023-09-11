import styled from 'styled-components';

export const GlobalButton = styled.button`
  position: relative;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  background: none;
  line-height: normal;
  white-space: nowrap;
  text-align: center;
  
  
  svg{
    width: 20px;
  }
  
  &:focus{
    outline: 0;
  }
`;
