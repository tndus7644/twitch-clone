import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Template from "./components/template";
import Router from "./routes/Router";


const App = () => {


    return (
        <Container>
            <GlobalStyle/>
            <Template>
                <Router/>
            </Template>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default App;