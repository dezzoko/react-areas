import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/constants/localstorage';

const initialState: UserSchema = {
    isAuth: false,
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initUserData: (state) => {
            const userToken = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (userToken) {
                state.isAuth = true;
                state.user = { username: 'johndoe@mail.com' };
            }
            state._inited = true;
        },
        setUserData: (state, { payload }: PayloadAction<User>) => {
            localStorage.setItem(
                USER_LOCAL_STORAGE_KEY,
                JSON.stringify('user-token'),
            );
            state.user = payload;
            state._inited = true;
            state.isAuth = true;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
