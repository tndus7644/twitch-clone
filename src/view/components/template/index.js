import React from 'react';
import styled from 'styled-components';
import Header from "../Header";
import SidebarContainer from "../../Container/SidebarContainer";

const Template = ({children}) => {

    return(
        <Container>
            <Header/>
            <SidebarContainer/>
            {children}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

export default Template;