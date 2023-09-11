import React from 'react';
import styled from 'styled-components';
import SearchContainer from "../Container/SearchContainer";
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