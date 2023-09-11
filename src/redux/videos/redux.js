import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    LiveStreamsList: {
        data: []
    },
    LiveStreamChannel: {
        data: []
    },
    LiveCategoryStreams:{
        data:[]
    },
    LiveUserList:{
        data:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    getLiveStreamsList: ['data'],
    getLiveStreamChannel: ['data'],
    getStreamsCategory:['data'],
    getLiveStreamUser:['data']
}, {
    prefix: 'STREAM/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    })
});