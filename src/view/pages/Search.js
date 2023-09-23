import React from 'react';
import styled from 'styled-components';
import SearchContainer from "../container/SearchContainer";
import {ContentContainer} from "../../styled/Container.Styled";

const Search = () => {

    return(
        <Container>
            <SearchContainer/>
        </Container>
    )
}

const Container = styled(ContentContainer)` 
  display: flex;
`;

export default Search;