import React from 'react';
import styled from 'styled-components';
import HomeContainer from "../Container/HomeContainer";
import {ContentContainer} from "../../styled/Container.Styled";

const Home = () => {

    return (
        <Container>
            <HomeContainer/>
        </Container>
    )
}

const Container = styled(ContentContainer)`
  
`;

export default Home;