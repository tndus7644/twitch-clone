import React from 'react';
import styled from 'styled-components';
import LiveContainer from "../container/LiveContainer";

const Live = ({match}) => {

    return(
        <Container>
            <LiveContainer match={match}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Live;