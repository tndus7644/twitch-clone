import React from 'react';
import styled from 'styled-components';
import {thousandNumberFormat} from "../../../lib/common";
import {CustomString} from "../../../styled/Title.Styled";
import {ProfileImage} from "../../../styled/ProfileImage.Styled";

const SidebarLiveContent = (props) => {

    const {
        user_name,
        viewer_count,
        game_name,
        user_login
    } = props


    return (
        <Container>
            <Profile>
                <ProfileImage/>
                <div className={"Profile_info"}>
                    <UserName>{user_name} ({user_login})</UserName>
                    <p>{game_name}</p>
                </div>
            </Profile>
            <Viewer>
                <div className={"live"}/>
                <p className={"viewer_count"}>{thousandNumberFormat(viewer_count)}</p>
            </Viewer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Profile = styled.div`
  padding-left: 5px;
  line-height: 1.2;
  display: flex;

  div.Profile_info {
    flex: 1;
    margin-left: 10px;

    p {
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-height: 1.4;
      -webkit-box-orient: vertical;
    }
  }

`;

const UserName = styled(CustomString)`
  font-weight: 600;
  cursor: pointer;
`;

const Viewer = styled.div`
  display: flex;
  align-items: center;

  .live {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: red;
  }

  .viewer_count {
    padding-left: 5px;
  }
`;

export default SidebarLiveContent;