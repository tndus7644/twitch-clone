import {bindActionCreators} from "redux";
import store from './store';

import {Action as GamesAction} from './games/redux'
import {Action as videosAction} from './videos/redux'
import {Action as searchAction} from './search/redux'

const {dispatch} = store;

export const GamesActions = bindActionCreators(GamesAction.Creators, dispatch);
export const videosActions = bindActionCreators(videosAction.Creators, dispatch);
export const searchActions = bindActionCreators(searchAction.Creators, dispatch);