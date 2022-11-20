import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    apiCalling: false,
    apiCalled: false,
    apiFailed: false,
    users: []
}

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        fetchUsersRequest: (state) => {
            state.apiCalling = true;
            state.apiCalled = false;
            state.apiFailed = false;
        },
        fetchUsersSuccess: (state, action) => {
            state.apiCalling = false;
            state.apiCalled = true;
            state.apiFailed = false;
            state.users = action.payload;
        },
        fetchUsersFailure: (state) => {
            state.apiCalling = false;
            state.apiCalled = false;
            state.apiFailed = true;
            state.users = [];
        }
    }
})

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;

export const userSeletor = (state) => state.users;

export default userSlice.reducer;