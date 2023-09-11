import React from 'react';
import styled from 'styled-components';
import {GlobalButton} from "../../../styled/Button.Styled";

const SidebarInfo = () => {

    return (
        <Container>
            <h1 className={"joinUs"}>
                <span>Twitch </span>
                 커뮤니티와 함께하세요!
            </h1>
            <p>어디서나 최고의 생방송을 즐겨보세요.</p>
            <JoinBtn>회원가입</JoinBtn>
        </Container>
    )
}

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  line-height: 1.3;
  font-size: 14px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);

  h1.joinUs {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;

    span {
      color: #9047ff;
    }
  }
`;

const JoinBtn = styled(GlobalButton)`
  margin-top: 10px;
  background: #9047ff;
  padding: 6px 8px;
  color: #fff;
  border-radius: 4px;

  &:hover {
    background: #803aea;
  }
`;

export default SidebarInfo;