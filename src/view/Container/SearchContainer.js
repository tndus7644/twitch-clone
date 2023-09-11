import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useLocation} from "react-router-dom";
import qs from 'qs';
import {searchActions} from "../../redux/ActionCreators";
import GridList from "../components/List/GridList";
import {useSelector} from "react-redux";
import SearchOnLive from "../components/Search/SearchOnLive";
import SearchOffLive from "../components/Search/SearchOffLive";

const SearchContainer = () => {

    const location = useLocation();
    const params = qs.parse(location.search, {ignoreQueryPrefix: true})

    console.log("qs", qs)
    console.log("location", location)

    const {channels} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchChannels({
            query: params?.term,
        })
    }, [params?.term])

    const OnLive = (item) => <SearchOnLive {...item}/>
    const OffLive = (item) => <SearchOffLive {...item}/>

    return (
        <Container>
            <Title>채널</Title>
            <GridList data={channels.isLive}
                      renderItem={OnLive}
                      direction={'column'}
            />
            <GridList data={channels.isOff}
                      renderItem={OffLive}
                      direction={'column'}
            />
            <Title>이전 동영상</Title>
        </Container>
    )
}

const Container = styled.div`
  padding: 65px 30px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
  line-height: 2.5;
  border-bottom: 1px solid #ddd;
`;

export default SearchContainer;