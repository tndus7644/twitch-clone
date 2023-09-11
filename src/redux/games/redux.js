import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    categoryList:{
        data:[

        ]
    }
}

export const Action = createActions({
    updateState: ['props'],
    getTopGames:['data']
}, {
    prefix: 'GAMES/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    })
});