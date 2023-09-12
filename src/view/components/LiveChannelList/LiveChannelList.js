import React from 'react';
import styled from 'styled-components';
import LiveChannelContent from "./LiveChannelContent";
import {Title} from "../../../styled/Title.Styled";
import GridList from "../List/GridList";

const LiveChannelList = ({LiveStreamsList}) => {

    const renderItem = (item) => <LiveChannelContent {...item}/>

    return (
        <Container>
            <VideoListTitle>
                <h1>취향 저격 <span>생방송 채널</span></h1>
            </VideoListTitle>
            <GridList data={LiveStreamsList.data}
                      renderItem={renderItem}
                      direction={'row'}
            >
            </GridList>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 30px;
`;

const VideoListTitle = styled(Title)`
`;

export default LiveChannelList;