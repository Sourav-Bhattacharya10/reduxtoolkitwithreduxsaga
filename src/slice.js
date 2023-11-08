import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSpinnerActive: false,
    apiCalled: false,
    users: []
}

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        setIsSpinnerActive: (state, action) => {
            state.isSpinnerActive = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setApiCalled: (state, action) => {
            state.apiCalled = action.payload;
        }
    }
})

export const { setIsSpinnerActive, setUsers, setApiCalled } = userSlice.actions;

export const userSeletor = (state) => state.users;

export default userSlice.reducer;