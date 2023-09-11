import React,{useEffect} from 'react';
import styled from 'styled-components';
import CategoryList from "../components/Category/CategoryList";
import {GamesActions, videosActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import LiveChannelList from "../components/LiveChannelList/LiveChannelList";
import LiveSlider from "../components/SlideLiveVideo/LiveSlider";
import StreamsCategory from "../components/StreamsCategory/StreamsCategory";

const HomeContainer = () => {

    const {categoryList} = useSelector(state => state.games)
    const {LiveStreamsList, LiveCategoryStreams} = useSelector(state => state.videos);

    useEffect(() => {
        getGamesCategory();
        getLiveStreamsList();
        getCategoryStreamsList();
    },[])

    const getGamesCategory = () => {
        GamesActions.getTopGames({
            first:10
        });
    }

    const getLiveStreamsList = () => {
        videosActions.getLiveStreamsList({
            first:5,
            language:'ko'
        })
    }

    const getCategoryStreamsList = () => {
        videosActions.getStreamsCategory({
            first:5,
            language:'ko',
            game_id:'21779'
        })
    }



    return (
        <Container>
            <LiveSlider LiveStreamsList={LiveStreamsList}/>
            <LiveChannelList LiveStreamsList={LiveStreamsList}/>
            <CategoryList categoryList={categoryList}/>
            <StreamsCategory LiveCategoryStreams={LiveCategoryStreams}/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 80px;
  margin: 0 20px;
`;

export default HomeContainer;