import React from 'react';
import styled from 'styled-components';
import {LoginSvg, MessageSvg} from "../svg";
import {GlobalButton} from "../../../styled/Button.Styled";

const MemberArea = () => {

    return (
        <Container>
            <Button>
                <MessageSvg/>
            </Button>
            <Button className={"login"}>
                <p>로그인</p>
            </Button>
            <Button className={"join"}>
                <p>회원가입</p>
            </Button>
            <Button>
                <LoginSvg/>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(GlobalButton)`
  padding: 6px 10px;
  margin: 0 4px;
  border-radius: 4px;
  

  &.login{
    background: #f1f1f1;
  }
  
  &.join{
    background: #9047ff;
    p{
      color: #fff;
    }
  }
`;


export default MemberArea;