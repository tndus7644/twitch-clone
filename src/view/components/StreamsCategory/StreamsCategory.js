import React from 'react';
import styled from 'styled-components';
import {Title} from "../../../styled/Title.Styled";
import GridList from "../List/GridList";
import LiveChannelContent from "../LiveChannelList/LiveChannelContent";

const StreamsCategory = ({LiveCategoryStreams}) => {

    const renderItem = (item) => <LiveChannelContent {...item}/>

    return(
        <Container>
            <CategoryTitle>추천 <span>League of Legends</span> 채널</CategoryTitle>
            <GridList data={LiveCategoryStreams.data}
                      renderItem={renderItem}
                      direction={'row'}
            >
            </GridList>
        </Container>
    )
}

const Container = styled.div`

`;

const CategoryTitle = styled(Title)`
    
`;

export default StreamsCategory;