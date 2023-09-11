import {all, call} from 'redux-saga/effects'

import gamesSaga from './games/saga'
import videosSaga from './videos/saga'
import searchSaga from './search/saga'

function* sagas() {
    yield all ([
        call(gamesSaga),
        call(videosSaga),
        call(searchSaga),
    ])
}

export default sagas;