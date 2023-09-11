import {combineReducers} from 'redux';

import gamesReducer from './games/redux';
import videosReducer from './videos/redux';
import searchReducer from './search/redux';

const reducers = combineReducers({
    games:gamesReducer,
    videos:videosReducer,
    search:searchReducer,
});

export default reducers;