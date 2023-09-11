import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import {API} from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_LIVE_STREAMS_LIST, function* ({data}) {
            try {
                const result = yield call(API.getLiveStreams, data)
                console.log("[saga getLiveStreams]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        LiveStreamsList: result,
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
        takeLatest(Action.Types.GET_LIVE_STREAM_CHANNEL, function* ({data}) {
            try {
                const result = yield call(API.getStreamChannel, data)
                console.log("[saga getStreamsChannel]", result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        LiveStreamChannel: result.data[0]
                    }))
                }
            } catch (e) {
                console.log("e", e)
            }
        }),
        takeLatest(Action.Types.GET_STREAMS_CATEGORY, function* ({data}){
            try{
                const result = yield call(API.getLiveStreams, data)
                console.log("[saga getLiveStreamsCategory", result)
                if(result){
                    yield put(Action.Creators.updateState({
                        LiveCategoryStreams: result
                    }))
                }
            }catch (e){
                console.log("e", e)
            }
        }),
    ])
}

export default saga;