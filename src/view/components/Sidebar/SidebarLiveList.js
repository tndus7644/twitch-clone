import React from 'react';
import styled from 'styled-components';
import SidebarLiveContent from "./SidebarLiveContent";

const SidebarLiveList = (props) => {

    const{
        LiveStreamsList
    } = props

    return(
        <Container>
            {
                LiveStreamsList.data.map((item, index) =>
                    <SidebarLiveContent {...item} key={index}/>)
            }
        </Container>
    )
}

const Container = styled.div`
padding-top: 20px;
`;

export default SidebarLiveList;