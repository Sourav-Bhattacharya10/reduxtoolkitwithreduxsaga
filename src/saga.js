import { call, put, takeLatest } from "@redux-saga/core/effects";
import axios from 'axios';

import { fetchUsersSuccess, fetchUsersFailure } from './slice';

function* fetchUersSaga(){
    try {
        // const response = yield call(() => axios.get("https://reqres.in/api/users?page=2"));
        const response = yield axios.get("https://reqres.in/api/users?page=2");
        yield put(fetchUsersSuccess(response.data.data))
    }
    catch (error) {
        console.log(error)
        yield put(fetchUsersFailure())
    }
}

export function* fetchUsersWatcher(){
    yield takeLatest("users/fetchUsersRequest", fetchUersSaga);
}