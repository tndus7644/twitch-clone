import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/router";
import Template from "./components/template";

const App = () => {


    return (
        <Container>
            <GlobalStyle/>
            <Template>
                <Routes/>
            </Template>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default App;