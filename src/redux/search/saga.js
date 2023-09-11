import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_CHANNELS, function* ({data}) {
            try {
                const result = yield call(API.searchChannels, data)
                console.log("[saga searchChannels]", result)
                const channelsData = yield Promise.all(result.data.map(async item => {
                    if(item.is_live){
                        const streamData = await API.getLiveStreams({
                            user_id: item.id
                        })
                        return{
                            ...item,
                            ...streamData.data[0]
                        }
                    }
                    return item;
                }))
                let isLiveChannels = [];
                let ifOffChannels = [];
                channelsData.map((item) => {
                    if(item.is_live){
                        isLiveChannels.push(item)
                    }else {
                        ifOffChannels.push(item)
                    }
                    return console.log("item", item)
                })
                if(result){
                    yield put(Action.Creators.updateState({
                        channels: {
                            isLive : isLiveChannels,
                            isOff: ifOffChannels
                        }
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
        takeLatest(Action.Types.SEARCH_CATEGORIES, function* ({data}) {
            try {
                const result = yield call(API.searchCategories, data)
                console.log("[saga searchCategories]", result)
                if(result){
                    yield put(Action.Creators.updateState({
                        categories: result
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
        takeLatest(Action.Types.SEARCH_VIDEOS, function* ({data}){
            try{
                const result = yield call(API.getSearchVideos, data)
                console.log("[saga getSearchVideos]", result)
                if(result){
                    yield put(Action.Creators.updateState({
                        videosList:result
                    }))
                }
            }catch (e){
                console.log("e", e)
            }
        })
    ])
}

export default saga;