import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    return (
        <Container>
            <p>상호명: Twitch Interactive, Inc.</p>
            <p>대표자: Emmett Shear, CEO</p>
            <p>주소: 350 Bush Street, 2nd Floor, San Francisco, California 94104, USA</p>
            <p>070-8984-5697</p>
            <p>호스팅 서비스 제공자: Amazon Web Services, Inc.</p>
            <p>지원팀에 문의 | 판매약관 | 사업자 정보</p>
        </Container>
    )
}

const Container = styled.div`
  line-height: 1.4;
  padding-top: 15px;
  font-size: 13px;
  color: #555;
`;

export default Footer;