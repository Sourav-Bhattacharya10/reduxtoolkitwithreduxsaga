import { put, takeLeading } from "@redux-saga/core/effects";
import axios from 'axios';

import { setIsSpinnerActive, setUsers, setApiCalled } from './slice';

function* fetchUersSaga(){
    try {
        yield put(setIsSpinnerActive(true))
        const response = yield axios.get("https://reqres.in/api/users?page=2");
        yield put(setUsers(response.data.data))
        yield put(setApiCalled(true))
    }
    catch (error) {
        console.log(error)
        yield put(setUsers([]))
        yield put(setApiCalled(false))
    }
    finally{
        yield put(setIsSpinnerActive(false))
    }
}

export function* fetchUsersWatcher(){
    yield takeLeading("FETCH_USERS", fetchUersSaga);
}