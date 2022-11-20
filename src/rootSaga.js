import { all } from "@redux-saga/core/effects";
import { fetchUsersWatcher } from './saga';

function* rootSaga() {
    yield all([
        fetchUsersWatcher()
      ])
}

export default rootSaga;